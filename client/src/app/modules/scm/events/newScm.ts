import { BaseEvent } from "lisk-sdk";

export interface NewSCMEventData {
	senderAddress: Buffer,
	date: string,
    component: string,
    demand: string,
    demandForecast: string,
    invTurnover: string,
    invTurnoverForecast: string
}

export const newSCMEventSchema = {
	$id: '/scm/events/newScm',
	type: 'object',
	required: ['senderAddress', 'demand', 'demandForecast', 'date', 'component', 'invTurnover', 'invTurnoverForecast'],
	properties: {
		senderAddress: {
			dataType: 'bytes',
			fieldNumber: 1,
		},
		date: {
            dataType:'string',
            fieldNumber: 2,
        },
        component: {
            dataType:'string',
            fieldNumber: 3,
        },
        demand: {
            dataType:'string',
            fieldNumber: 4,
        },
        demandForecast: {
            dataType:'string',
            fieldNumber: 5,
        },
        invTurnover: {
            dataType:'string',
            fieldNumber: 6,
        },
        invTurnoverForecast: {
            dataType:'string',
            fieldNumber: 7,
        },
	},
};

export class NewSCMEvent extends BaseEvent<NewSCMEventData> {
    public schema = newSCMEventSchema
}