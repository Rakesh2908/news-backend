const axios = require("axios");
const makeRequest = (url) => {
    return axios.get(url)
}

module.exports = {makeRequest}