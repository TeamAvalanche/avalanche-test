'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const rp = require('request-promise');

const app = express();
const PORT = process.env.PORT || 3000;
// const __API_URL__ = 'http://www.nwac.us/api/v2/avalanche-forecast/?format=json&day1_date=2018-01-16';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var options = {
    url: 'http://www.nwac.us/api/v2/avalanche-forecast/?format=json&day1_date=2018-01-16',
    json: true
};

rp(options)
    .then(function(locations) {
        console.log('locations', locations.objects[0].avalanche_region_forecast[0].bottom_line_summary)
    })
    .catch(function(err) {
        console.error('error', err)
    });

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
});

app.get('/test', (req,res) => res.send());