export const SetForecastCommandSchema = {
	$id: 'scm/Forecast-params',
	title: 'Transaction parameters for the SetForecastComamnd in SCM module',
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
    },
};