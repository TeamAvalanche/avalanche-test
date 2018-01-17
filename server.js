'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
});

app.get('/test', (req,res) => res.send('Avalanche Test'));