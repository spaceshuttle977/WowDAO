/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';
import { ScmModule } from "./modules/scm/module";


export const registerModules = (app: Application): void => {

    app.registerModule(new ScmModule());
};
