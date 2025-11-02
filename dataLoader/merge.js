import fs from 'fs'

const readJSONFromFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const endpoint = {
    prod: '',
    test: 'http://localhost:3001'
}

const json1FilePath = 'demand.json';
const json2FilePath = 'inventory.json';

const json1 = readJSONFromFile(json1FilePath);
const json2 = readJSONFromFile(json2FilePath);

// Merging json1 and json2 to form json3
const json3 = json1.map((item1) => {
  const matchingItem = json2.find((item2) => item2.date === item1.date);

  return {
    date: String(item1.date),
    component: 'Detector',
    demand: item1.demand !== null ? String(item1.demand) : "0",
    demandForecast: item1.demandForecast !== null ? String(item1.demandForecast) : "0",
    invTurnover: matchingItem && matchingItem.invTurnover !== null ? String(matchingItem.invTurnover) : "0",
    invTurnoverForecast: matchingItem && matchingItem.invTurnoverForecast != null ? String(matchingItem.invTurnoverForecast) : "0"
  };
});

fs.writeFileSync('json3.json', JSON.stringify(json3))