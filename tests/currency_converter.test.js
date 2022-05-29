require('../src/currency_converter');


test('EUR to USD should be 1.07', () => {
    expect(currencyConverter.convert('USD', 1)).toBe(1.07);
});


