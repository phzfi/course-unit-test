const { default: axios } = require('axios');

require('./fixer_api')

class CurrencyConverter {
    #rates = {
        'USD': 1.07,
        'RUB': 71.68,
        'SEK': 10.53
    };
    #fixerApi

    constructor(fixer_api) {
        this.#fixerApi = fixer_api
    }

    convert(currency, value) {
        this.getRates().then((rates) => {
            const rate = rates[currency];
            if (!rate) {
                throw new Error('Unknown currency');
            }
            if (value === null || isNaN(value)) {
                throw new Error('Value is not a number');
            }

            return rate * value;
        }).catch((e) => {
            return e
        })
    }

    getRates() {
        return this.#fixerApi.getRates().rates;
    }
}

currencyConverter = new CurrencyConverter(fixer_api);
