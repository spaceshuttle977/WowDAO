import { BasePlugin, db as liskDB, codec } from 'lisk-sdk';
import {
	getDBInstance,
	getLastEventHeight,
	setEventSCMData,
	setLastEventHeight,
	getLastCounter,
	setLastCounter
} from './db';
import { configSchema } from './schemas';
import { SCMDataPluginConfig, Height, Counter } from './types';
import { newSCMEventSchema } from '../../modules/scm/events/newScm';
import { Endpoint } from './endpoint';

 /* eslint-disable class-methods-use-this */
 /* eslint-disable  @typescript-eslint/no-empty-function */
 export class ScmDataPlugin extends BasePlugin<SCMDataPluginConfig> {

	public configSchema = configSchema;
	private _pluginDB!: liskDB.Database;
	public endpoint = new Endpoint();

	public get nodeModulePath(): string {
		return  __filename;
	}

	public async load(): Promise<void> {
		// loads DB instance
		this._pluginDB = await getDBInstance(this.dataPath);
		setInterval(() => { this._syncChainEvents(); }, this.config.syncInterval);
		this.endpoint.init(this._pluginDB);
	}

	public async unload(): Promise<void> {
		this._pluginDB.close();
	}

	private async _getLastCounter(): Promise<Counter> {
		try {
			const counter = await getLastCounter(this._pluginDB);
			return counter;
		} catch (error) {
			if (!(error instanceof liskDB.NotFoundError)) {
				throw error;
			}
			await setLastCounter(this._pluginDB, 0);
			return { counter: 0 };
		}
	}

	private async _getLastHeight(): Promise<Height> {
		try {
			const height = await getLastEventHeight(this._pluginDB);
			return height;
		} catch (error) {
			if (!(error instanceof liskDB.NotFoundError)) {
				throw error;
			}
			await setLastEventHeight(this._pluginDB, 0);
			return { height: 0 };
		}
	}

	private async _syncChainEvents(): Promise<void> {
		// 1. Get the latest block height from the blockchain
		const res = await this.apiClient.invoke<{ header: { height: number } }>("chain_getLastBlock", {
		})
		// 2. Get block height stored in the database
		const heightObj = await this._getLastHeight();
		const lastStoredHeight = heightObj.height + 1;
		const { height } = res.header;
		// 3. Loop through new blocks, starting from the lastStoredHeight + 1
		for (let index = lastStoredHeight; index <= height; index += 1) {
			const result = await this.apiClient.invoke<{ data: string; height: number; module: string; name: string }[]>("chain_getEvents", {
				height: index
			});
			//console.log(result)
			// 3a. Once an event is found, decode its data and pass it to the _saveEventInfoToDB() function
			const scmDataEvents = result.filter(e => e.module === 'scm' && e.name === 'newSCM');
			//const scmDataEvents = result.filter(e => e.module === 'scm')
			//console.log('SCM Data Event : ', scmDataEvents)
			for (const scmDataEvent of scmDataEvents) {
				const parsedData = codec.decode<{ senderAddress: Buffer; date: string; component: string; demand: string; demandForecast: string; invTurnover: string; invTurnoverForecast: string }>(newSCMEventSchema, Buffer.from(scmDataEvent.data, 'hex'));				
				const { counter } = await this._getLastCounter();
				await this._saveEventInfoToDB(parsedData, scmDataEvent.height, counter + 1);
			}
		}
		// 4. At the end of the loop, save the last checked block height in the database.
		await setLastEventHeight(this._pluginDB, height);
	}

	private async _saveEventInfoToDB(parsedData: { senderAddress: Buffer; date: string; component: string; demand: string; demandForecast: string; invTurnover: string; invTurnoverForecast: string }, chainHeight: number, counterValue: number): Promise<string> {
		// 1. Saves newly generated hello events to the database
		const { senderAddress, date, component, demand, demandForecast, invTurnover, invTurnoverForecast } = parsedData;
		await setEventSCMData(this._pluginDB, senderAddress, date, component, demand, demandForecast, invTurnover, invTurnoverForecast, chainHeight, counterValue);
		// 2. Saves incremented counter value
		await setLastCounter(this._pluginDB, counterValue);
		// 3. Saves last checked block's height
		await setLastEventHeight(this._pluginDB, chainHeight);
		return "Data Saved";
	}
}
