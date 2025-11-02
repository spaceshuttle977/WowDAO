import { apiClient, cryptography, transactions} from "@liskhq/lisk-client";
//const rpc_endpoint = "ws://127.0.0.1:7887/rpc-ws" //52.90.126.220
const rpc_endpoint = "ws://44.193.219.109:7887/rpc-ws" 
const DATA_PATH = '~/.lisk/client';

const client = await apiClient.createWSClient(rpc_endpoint);
//const client = await apiClient.createIPCClient(DATA_PATH)
/*
const obj = {
    "date": "2010-09-30", 
    "component": "Detector", 
    "demand": "72", 
    "demandForecast": "0",
    "invTurnover": "70",
    "invTurnoverForecast": "0"
}*/

export const signAndSendTxn = async (paramObj) => {
    console.log(paramObj)
    const passphrase = "swing brief patch asset imitate social close draw put resist six ask easy lake grass tuition sun protect sister pulp escape garment steak awkward"
    const privateKey = await cryptography.ed.getPrivateKeyFromPhraseAndPath(passphrase, "m/44'/134'/0'");
    
    try {
        const signedTx = await client.transaction.create({
            module: 'scm',
            command: 'setForecast',
            fee: BigInt(transactions.convertLSKToBeddows('0.01')),
            params: paramObj,
        }, privateKey)
        console.log(signedTx)
        if (typeof signedTx !== "undefined") {
            const txResponse = await client.transaction.send(signedTx)
            console.log(txResponse)  
            return {status: 'success', txn: txResponse}
        }
    } catch (err)  {        
        console.log(err.message)
        return {status: 'error', msg: err.message}
    }
}

export const getSCMData = async () => {    
    return client.invoke("scmData_getSCMDataList", {
    }).then(res => {
        console.log(res)    
        return {status: 'success', data: res} 
    }).catch (err => {
        console.log(err)
        return {status: 'error', data: err} 
    })
}

//signAndSendTxn(obj)
//getSCMData()
