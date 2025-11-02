import fs from 'fs'

const readJSONFromFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const jsonData = readJSONFromFile('json3.json')
//console.log(jsonData)
console.log(jsonData.length)

const invoke = async (json) => {
    await signAndSendTxn(json)
}

const addData = async (data) => {
    console.log(data);
    const response = await fetch(`http://18.234.241.47:3001/addData`, {    
      method: 'POST',
      mode: 'cors',      
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    const newdata = await response.json()
    console.log(newdata)
}

const executeWithDelay = async (iterations, delayInSeconds) => {
    for (let i = 0; i < iterations; i++) {
      try {
        //await invoke(jsonData[i]);        
        await addData(JSON.stringify(jsonData[i]))
        console.log(`Iteration ${i + 1} complete`);
      } catch (error) {
        console.error(`Error in iteration ${i + 1}:`, error);
      }
      await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
    }
  };


executeWithDelay(jsonData.length, 10);