export const offChainEventSchema = {
	$id: '/scmData/newData',
	type: 'object',
	required: ['senderAddress', 'date', 'component', 'demand', 'demandForecast', 'invTurnover', 'invTurnoverForecast', 'height'],
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
		height: {
			dataType: 'uint32',
			fieldNumber: 8,
		},
	},
};

export const counterSchema = {
	$id: '/scmData/counter',
	type: 'object',
	required: ['counter'],
	properties: {
		counter: {
			dataType: 'uint32',
			fieldNumber: 1,
		},
	},
};

export const heightSchema = {
	$id: '/scmData/height',
	type: 'object',
	required: ['height'],
	properties: {
		height: {
			dataType: 'uint32',
			fieldNumber: 1,
		},
	},
};

export const configSchema = {
	$id: '/plugins/scmData/config',
	type: 'object',
	properties: {
		syncInterval: {
			type: 'integer',
		},
	},
	required: ['syncInterval'],
	default: {
		syncInterval: 30000, // milliseconds
	},
};