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

describe("FixerAPI", () => {

    it('should get new currency conversion rates with mock', () => {
        let axios_mock = jest.mock('axios');
        let get_mock = jest.fn();
        const response = 
        {
            date: '2022-05-31',
            rates: {
                'USD': 1.07,
                'RUB': 71.68,
                'SEK': 10.53
            }
        };
        get_mock.mockReturnValue(new Promise( (response) => response));
        axios_mock.get = get_mock;

        const fixer_api_mock = new FixerAPI(axios_mock, "foobar_token");

        return fixer_api_mock.getRates().then(data => expect(data).toHaveProperty('rates'));
    });
});