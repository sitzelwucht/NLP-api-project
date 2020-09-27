const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
const apiKey = require('./APIkey.js');
const app = express();

app.use(express.static('dist'));


const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile('/dist/index.html')
})

app.get('/api', (req, res) => {
  res.send(apiKey);
})