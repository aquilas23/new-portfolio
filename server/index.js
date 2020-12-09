require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express');
const path = require('path')
const { SERVER_PORT } = process.env;
const app = express();

app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
})