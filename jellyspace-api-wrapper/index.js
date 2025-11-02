import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


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
    const url = "http://18.234.241.47:3001/getData"
    const result = await fetch(url)
    const data  = await result.json()
    console.log(data);
    res.send(data);
})

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
