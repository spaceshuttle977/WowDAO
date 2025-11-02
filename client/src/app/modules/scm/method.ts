import { BaseMethod, ImmutableMethodContext } from 'lisk-sdk';
import { ForecastStore, ForecastStoreData } from './stores/forecast';

export class ScmMethod extends BaseMethod {
    public async getForecast(
        methodContext: ImmutableMethodContext,
        address: Buffer,        
    ): Promise<ForecastStoreData> {
        const forecastSubStore = this.stores.get(ForecastStore)
        const scmData = await forecastSubStore.get(methodContext, address)
        return scmData
    }
}
