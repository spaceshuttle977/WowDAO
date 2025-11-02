/* eslint-disable class-methods-use-this */

import {
    BaseCommand,
    CommandVerifyContext,
    CommandExecuteContext,
	VerificationResult,
	VerifyStatus,
} from 'lisk-sdk';
import { SetForecastCommandSchema } from '../schema'
import { ForecastStore } from '../stores/forecast';
import { counterKey, CounterStore, CounterStoreData } from '../stores/counter';
import { NewSCMEvent } from '../events/newScm';

interface Params {
	date: string;
    component: string;
    demand: string;
    demandForecast: string;  
	invTurnover: string;
	invTurnoverForecast: string;
}

export class SetForecastCommand extends BaseCommand {
	public schema = SetForecastCommandSchema

	public async init(): Promise<void> {
		
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	public async verify(context: CommandVerifyContext<Params>): Promise<VerificationResult> {
		let validation: VerificationResult;
		if( !context.params.component ||
			!context.params.date ||
			!context.params.demandForecast ||
			!context.params.demand ||
			!context.params.invTurnover ||
			!context.params.invTurnoverForecast ) {
				throw new Error("Parameter missing...");				
		} else {
			context.logger.info('Parameters validated...')
			validation = {
				status: VerifyStatus.OK
			}
		}
		return validation
	}

	public async execute(context: CommandExecuteContext<Params>): Promise<void> {
		const { senderAddress } = context.transaction
		const forecastSubStore = this.stores.get(ForecastStore)
		const counterSubstore = this.stores.get(CounterStore);
		await forecastSubStore.set(context, senderAddress, {
			date: context.params.date,
            component: context.params.component,
            demand: context.params.demand,
            demandForecast: context.params.demandForecast,
			invTurnover: context.params.invTurnover,
			invTurnoverForecast: context.params.invTurnoverForecast
		})

		let scmCounter: CounterStoreData;
        try {
            scmCounter = await counterSubstore.get(context, counterKey);
        } catch (error) {
            scmCounter = {
                counter: 0,
            }
        }        
        scmCounter.counter+=1;        
        await counterSubstore.set(context, counterKey, scmCounter);

		const newSCMEvent = this.events.get(NewSCMEvent)
		newSCMEvent.add(context, {
			senderAddress: context.transaction.senderAddress,
			date: context.params.date,
			component: context.params.component,            
            demand: context.params.demand,
            demandForecast: context.params.demandForecast,
			invTurnover: context.params.invTurnover,
			invTurnoverForecast: context.params.invTurnoverForecast
		},[context.transaction.senderAddress])
	}
}
