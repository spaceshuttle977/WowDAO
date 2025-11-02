/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/member-ordering */

import {
    BaseModule,
    ModuleMetadata,
	TransactionVerifyContext,
	VerificationResult
} from 'lisk-sdk';
import { SetForecastCommand } from "./commands/set_forecast_command";
import { ScmEndpoint } from './endpoint';
import { ScmMethod } from './method';
import { ForecastStore } from "./stores/forecast";
import { CounterStore } from './stores/counter';
import { NewSCMEvent } from './events/newScm';

export class ScmModule extends BaseModule {
    public endpoint = new ScmEndpoint(this.stores, this.offchainStores);
    public method = new ScmMethod(this.stores, this.events);
    public commands = [new SetForecastCommand(this.stores, this.events)];

	public constructor() {
	 	super();
	 	// registeration of stores and events
		this.stores.register(CounterStore, new CounterStore(this.name, 0));
		this.stores.register(ForecastStore, new ForecastStore(this.name, 1));
		this.events.register(NewSCMEvent, new NewSCMEvent(this.name))
	}

	public metadata(): ModuleMetadata {
		return {
			...this.baseMetadata(),
			endpoints: [],
			assets: [],
		};
	}

    // Lifecycle hooks
    // public async init(_args: ModuleInitArgs): Promise<void> {
	// 	// initialize this module when starting a node
	// }

	// public async insertAssets(_context: InsertAssetContext) {
	// 	// initialize block generation, add asset
	// }

	// public async verifyAssets(_context: BlockVerifyContext): Promise<void> {
	// 	// verify block
	// }

    // Lifecycle hooks
	public async verifyTransaction(context: TransactionVerifyContext): Promise<VerificationResult> {
		// 	verify transaction will be called multiple times in the transaction pool
		context.logger.info("TX-Verification")
		const result = {
			status: 1
		}
		return result;
	}

	// public async beforeCommandExecute(_context: TransactionExecuteContext): Promise<void> {
	// }

	// public async afterCommandExecute(_context: TransactionExecuteContext): Promise<void> {

	// }
	// public async initGenesisState(_context: GenesisBlockExecuteContext): Promise<void> {

	// }

	// public async finalizeGenesisState(_context: GenesisBlockExecuteContext): Promise<void> {

	// }

	// public async beforeTransactionsExecute(_context: BlockExecuteContext): Promise<void> {

	// }

	// public async afterTransactionsExecute(_context: BlockAfterExecuteContext): Promise<void> {

	// }
}
