import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getSCMData, signAndSendTxn } from './liskUtils.js';


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const PORT = 3001

process.on('uncaughtException', function (err) {
    console.log(err);
  });
  
app.get('/', (req, res) => { 
    res.send('OK!')
});

app.get('/getData', async (req, res) => { 
    const result = await getSCMData()
    res.send(result)   
})

app.post('/addData', async (req, res) => {
    if (!req.body) {
        throw new Error("Body empty...Resend request with data in body")     
    }
    const body = req.body    
    console.log(body)
    const result = await signAndSendTxn(body)
    if (result.status === 'success') {
        res.send(result)
    } else {
        res.send(result)
    }
})

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
