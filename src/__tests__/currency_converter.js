require('../currency_converter');

test('convert null value should throw Error', () => {
    expect(() => { currencyConverter.convert(null, null) } ).toThrow(Error);
    expect(() => { currencyConverter.convert('USD', null) } ).toThrow(Error);
    expect(() => { currencyConverter.convert(null, 0) } ).toThrow(Error);
});

test('convert undefined value should throw Error', () => {
    expect(() => { currencyConverter.convert(undefined, undefined) } ).toThrow(Error);
    expect(() => { currencyConverter.convert('USD', undefined) } ).toThrow(Error);
    expect(() => { currencyConverter.convert(undefined, 0) } ).toThrow(Error);
});


test('convert negative values should work', () => {
    expect(currencyConverter.convert('USD', -1) ).toBeCloseTo(-1.07, 1);
});

test('converting octal numbers would work normally', () => {
    expect(currencyConverter.convert('USD', '08') ).toBe(8.56);
});


test('convert 32bit unsigned int max EUR to RUB', () => {
    expect(currencyConverter.convert('RUB', 4294967295) ).toBe(307863255705.60004);
});




test('EUR to USD should be 1.07', () => {
    expect(currencyConverter.convert('USD', 1)).toBeCloseTo(1.07, 1);
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