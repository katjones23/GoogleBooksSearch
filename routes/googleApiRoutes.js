require("dotenv").config();

const axios = require('axios').default;
const key = process.env.API_KEY;
const url = "https://www.googleapis.com/books/v1/volumes?q="

module.exports = function (query) {
    axios.get(url + query + `&key=${key}`)
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (err) {
        console.log(err);
        res.status(400).json(err);
    });
};
