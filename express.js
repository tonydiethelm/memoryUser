//set up stuff for express
const express = require('express');
const app = express();
const port = 3002;



//Not used, but universally handy. Just in case. 
app.use(express.json());


app.get('/:memory', (request, response) => {
    const memoryRequested = request.params.memory;
    
    
    console.log(`Ok, trying to burn ${memoryRequested}Mb...`);
    const a = useMemory(memoryRequest * 1000000);
    console.log(a[0]);
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
