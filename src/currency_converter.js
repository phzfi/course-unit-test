class CurrencyConverter {
    #rates = {
        'USD': 1.07,
        'RUB': 71.68,
        'SEK': 10.53
    };

    convert(currency, value) {
        return this.#rates[currency] * value;
    }
}

currencyConverter = new CurrencyConverter();

