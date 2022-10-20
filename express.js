//set up stuff for express
const express = require('express');
const app = express();
const port = 3000;



//Not used, but universally handy. Just in case. 
app.use(express.json());


app.get('/500', (request, response) => {
    console.log("Ok, trying to burn 500Mb...");
    useMemory(500000000)
    response.status(200).json('500Mb')});

app.get('/1000', (request, response) => {
    console.log("Ok, trying to burn 1Gb...");
    useMemory(1000000000)
    response.status(200).json('1Gb')});

app.get('/1500', (request, response) => {
    console.log("Ok, trying to burn 1.5Gb...");
    useMemory(1500000000)
    response.status(200).json('1.5Gb')});    

app.get('/2000', (request, response) => {
    console.log("Ok, trying to burn 2Gb...");
    useMemory(2000000000)
    response.status(200).json('2Gb')});    

app.get('/2500', (request, response) => {
    console.log("Ok, trying to burn 2.5Gb...");
    useMemory(2500000000)
    response.status(200).json('2.5Gb')});


app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});


function useMemory(memoryDesired){
    const numberOfNumbersToGetMemoryDesired = memoryDesired / 8;
    const bigMemory = []
    for (let counter = 0; counter < numberOfNumbersToGetMemoryDesired; counter++)
        bigMemory.push(counter)
}
