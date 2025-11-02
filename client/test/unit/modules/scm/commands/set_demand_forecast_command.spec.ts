import { SetDemandForecastCommand } from '../../../../../src/app/modules/scm/commands/set_demand_forecast_command';

describe('SetDemandForecastCommand', () => {
  let command: SetDemandForecastCommand;

	beforeEach(() => {
		command = new SetDemandForecastCommand();
	});

	describe('constructor', () => {
		it('should have valid name', () => {
			expect(command.name).toEqual('setDemandForecast');
		});

		it('should have valid schema', () => {
			expect(command.schema).toMatchSnapshot();
		});
	});

	describe('verify', () => {
		describe('schema validation', () => {
      it.todo('should throw errors for invalid schema');
      it.todo('should be ok for valid schema');
    });
	});

	describe('execute', () => {
    describe('valid cases', () => {
      it.todo('should update the state store');
    });

    describe('invalid cases', () => {
      it.todo('should throw error');
    });
	});
});
