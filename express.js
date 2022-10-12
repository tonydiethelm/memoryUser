//set up stuff for express
const express = require('express');
const polo = express();
const port = 3000;



//Not used, but universally handy. Just in case. 
polo.use(express.json());


polo.get('/marco', (request, response) => {response.status(200).send('Polo!')});

polo.listen(port, () => {
    console.log('Server listening on port: ' + port);
});