import { BaseEndpoint, cryptography, ModuleEndpointContext } from 'lisk-sdk';
import { ForecastStore, ForecastStoreData } from './stores/forecast';
import { counterKey, CounterStore, CounterStoreData } from './stores/counter';

export class ScmEndpoint extends BaseEndpoint {
    public async getForecast (ctx: ModuleEndpointContext): Promise<ForecastStoreData> {
        const forecastSubStore = this.stores.get(ForecastStore)
        const { address } = ctx.params;
        if (typeof address !== 'string') {
            throw new Error('Parameter address must be a string.');
        }
        cryptography.address.validateLisk32Address(address);
        const forecast = await forecastSubStore.get(
            ctx,
            cryptography.address.getAddressFromLisk32Address(address)
            )
        return forecast
        }

    public async getSCMCounter(ctx: ModuleEndpointContext): Promise<CounterStoreData> {
        const counterSubStore = this.stores.get(CounterStore);
    
        const scmCounter = await counterSubStore.get(
            ctx,
            counterKey,
        );
    
        return scmCounter;
        }
}
