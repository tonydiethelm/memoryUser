//set up stuff for express
const express = require('express');
const app = express();
const port = 3002;


app.use(express.json());


app.get('/:memory', (request, response) => {
    //get memory requested
    //send appropriate number to useMemory
    //setTimeout to hold that big variable for 3 minutes, to make sure Prometheus/metrics sees it.
    //Then console log from it, just so we use it somewhere, so it doesn't get garbage collected. 

    const memoryRequested = request.params.memory;
    console.log(`Ok, trying to burn ${memoryRequested}Mb...`);
    const a = useMemory(memoryRequested * 1000000);
    setTimeout(console.log(a[a.length - 1]), 180000);
    response.status(200).json(`${memoryRequested}`)});

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
