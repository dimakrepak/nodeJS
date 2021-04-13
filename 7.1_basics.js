const request = require('request');
const axios = require('axios');
const url = `https://api.chucknorris.io/jokes/random`
const needle = require('needle')

request({
    url: url,
    json: true
}, (error, response) => {
    console.log(response.body.value);
})

axios.get(url).then((response) => {
    console.log(response.data.value);
})

needle.get(url, (error, response) => {
    console.log(response.body.value);
})
