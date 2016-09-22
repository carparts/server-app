"use strict";

const express = require('express');
const server = express();
const port = 9999;

server.get('/', (request, response) => {
    response.send('Hello from Express.js!')
});


server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
