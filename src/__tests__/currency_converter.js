require('../currency_converter');

test('convert null value should throw Error', () => {
    expect(() => { currencyConverter.convert(null, null) } ).toThrow(Error);
    expect(() => { currencyConverter.convert('USD', null) } ).toThrow(Error);
    expect(() => { currencyConverter.convert(null, 0) } ).toThrow(Error);
});

test('EUR to USD should be 1.07', () => {
    expect(currencyConverter.convert('USD', 1)).toBe(1.07);
});













test('algebra is working on this computer', () => {
    expect(2+3).not.toBe(4);
});

test('regexp matcher is working', () => {
    expect('My test').toMatch(/test/);
});

test('convert to unknown currency throws an Error', () => {
    expect(() => {currencyConverter.convert('XXX', 1)}).toThrow(Error);
});