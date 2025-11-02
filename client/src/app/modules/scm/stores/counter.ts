import { BaseStore } from 'lisk-sdk';

export interface CounterStoreData {
	counter: number;
}

export const counterKey = Buffer.alloc(0);

export const counterStoreSchema = {
	$id: '/scm/counter',
	type: 'object',
	required: ['counter'],
	properties: {
		counter: {
			dataType: 'uint32',
			fieldNumber: 1,
		},
	},
};

export class CounterStore extends BaseStore<CounterStoreData> {
	public schema = counterStoreSchema;
}