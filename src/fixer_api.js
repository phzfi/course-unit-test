const axios = require('axios').default;

class FixerAPI {
    #axios;
    #api_key;

    constructor(axios, api_key) {
        this.#axios = axios;
        this.#api_key = '8644c95c0be39b90bd910a261254a563';
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

export default FixerApi;

//fixer_api = new FixerAPI(axios, process.env.FIXERIO_API_KEY);
