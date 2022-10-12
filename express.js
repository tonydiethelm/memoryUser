//set up stuff for express
const express = require('express');
const polo = express();
const port = 3000;



//Not used, but universally handy. Just in case. 
app.use(express.json());


app.get('/marco', (request, response) => {response.status(200).send('Polo!')});

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});