import {
    BasePluginEndpoint,
    PluginEndpointContext,
    db as liskDB,
    cryptography,
} from 'lisk-sdk';
import {
    getEventSCMData,
} from './db';


export class Endpoint extends BasePluginEndpoint {
    private _pluginDB!: liskDB.Database;

    // Initialize the database instance here
    public init(db: liskDB.Database) {
        this._pluginDB = db;
    }

public async getSCMDataList(_context: PluginEndpointContext): Promise<unknown[]> {
    const data: {
        ID: number;
        senderAddress: string;
        date: string;
        component: string;
        demand: string;
        demandForecast: string;
        invTurnover: string;
        invTurnoverForecast: string;
        blockHeight;
        }[] = [];
        // 1. Get all the stored events from the database.
        const scmDataList = await getEventSCMData(this._pluginDB);
        // 2. Push them into an array for presentation.
        for (const scmData of scmDataList) {
            data.push({
                ID: scmData.id.readUInt32BE(0),
                senderAddress: cryptography.address.getLisk32AddressFromAddress(scmData['senderAddress']),
                date: scmData['date'],
                component: scmData['component'],
                demand: scmData['demand'],
                demandForecast: scmData['demandForecast'],                
                invTurnover: scmData['invTurnover'],                
                invTurnoverForecast: scmData['invTurnoverForecast'],                
                blockHeight: scmData['height'],
            })
        }
        return data;
    }    
}
