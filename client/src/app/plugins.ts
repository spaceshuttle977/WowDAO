/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';
import { ScmDataPlugin } from "./plugins/scm_data/scm_data_plugin";

export const registerPlugins = (app: Application): void => {

    app.registerPlugin(new ScmDataPlugin());
};
