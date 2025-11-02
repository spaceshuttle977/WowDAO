import { BaseStore } from "lisk-sdk";

export interface ForecastStoreData {
    date: string;
    component: string;
    demand: string;
    demandForecast: string;
    invTurnover: string;
    invTurnoverForecast: string;
}

export const forecastStoreSchema = {
    $id: '/scm/forecast',
    type: 'object',
    required: ['demand', 'demandForecast', 'date', 'component', 'invTurnover', 'invTurnoverForecast'],
    properties: {
        date: {
            dataType:'string',
            fieldNumber: 1,
        },
        component: {
            dataType:'string',
            fieldNumber: 2,
        },
        demand: {
            dataType:'string',
            fieldNumber: 3,
        },
        demandForecast: {
            dataType:'string',
            fieldNumber: 4,
        },
        invTurnover: {
            dataType:'string',
            fieldNumber: 5,
        },
        invTurnoverForecast: {
            dataType:'string',
            fieldNumber: 6,
        },
    }
}

export class ForecastStore extends BaseStore<ForecastStoreData> {
    public schema = forecastStoreSchema;
}