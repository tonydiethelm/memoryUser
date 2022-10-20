//set up stuff for express
const express = require('express');
const app = express();
const port = 3002;



//Not used, but universally handy. Just in case. 
app.use(express.json());


app.get('/500', (request, response) => {
    console.log("Ok, trying to burn 500Mb...");
    const a = useMemory(500000000);
    console.log(a[0]);
    response.status(200).json('500Mb')});

app.get('/1000', (request, response) => {
    console.log("Ok, trying to burn 1Gb...");
    const a = useMemory(500000000);
    const b = useMemory(500000000);
    console.log(a[0], b[0]);
    response.status(200).json('1Gb')});

app.get('/1500', (request, response) => {
    console.log("Ok, trying to burn 1.5Gb...");
    const a = useMemory(500000000);
    const b = useMemory(500000000);
    const c = useMemory(500000000);
    console.log(a[0], b[0], c[0]);
    response.status(200).json('1.5Gb')});    

app.get('/2000', (request, response) => {
    console.log("Ok, trying to burn 2Gb...");
    const a = useMemory(500000000);
    const b = useMemory(500000000);
    const c = useMemory(500000000);
    const d = useMemory(500000000);
    console.log(a[0], b[0], c[0], d[0]);
    response.status(200).json('2Gb')});    

app.get('/2500', (request, response) => {
    console.log("Ok, trying to burn 2.5Gb...");
    const a = useMemory(500000000);
    const b = useMemory(500000000);
    const c = useMemory(500000000);
    const d = useMemory(500000000);
    const e = useMemory(500000000);
    console.log(a[0], b[0], c[0], d[0], e[0]);
    response.status(200).json('2.5Gb')});


app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});


function useMemory(memoryDesired){
    const numberOfNumbersToGetMemoryDesired = memoryDesired / 8;
    const bigMemory = []
    for (let counter = 0; counter < numberOfNumbersToGetMemoryDesired; counter++)
        bigMemory.push(counter);
    return bigMemory;
};
