const axios = require('axios').default;

class FixerAPI {
    #axios;
    #api_key;

    constructor(axios, api_key) {
        this.#axios = axios;
        this.#api_key = api_key;
    }

    getRates() {
        // Make a request for a user with a given ID
        return this.#axios.get('https://data.fixer.io/api/latest?access_key=' + this.#api_key)
        .then(function (response) {
            // handle success
            let rates = response.data;
            return rates;
        })
        .catch(function (error) {
            // handle error
            throw error;
        });
    }
}

fixer_api = new FixerAPI(axios, process.env.FIXERIO_API_KEY);