class CurrencyConverter {
    #rates = {
        'USD': 1.07,
        'RUB': 71.68,
        'SEK': 10.53
    };

    convert(currency, value) {
        const rate = this.#rates[currency];
        if (!rate) {
            throw new Error('Unknown currency');
        }
        if (value === null || isNaN(value)) {
            throw new Error('Value is not a number');
        }

        return rate * value;
    }
}

currencyConverter = new CurrencyConverter();

