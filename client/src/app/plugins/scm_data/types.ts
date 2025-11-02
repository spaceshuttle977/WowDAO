export interface Event {
    senderAddress: Buffer;
    date: string;
    component: string;
    demand: string;
    demandForecast: string;
    invTurnover: string;
    invTurnoverForecast: string;
    height: number;
}

export interface Height {
    height: number;
}

export interface Counter {
    counter: number;
}

export interface SCMDataPluginConfig {
    syncInterval: number;
}