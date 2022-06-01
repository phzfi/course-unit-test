require('../currency_converter');

describe("As Bill the Banker when I'm using the currency converter", () => {
    
    it.skip('should throw Error on null values', () => {
        expect(() => { currencyConverter.convert(null, null) } ).toThrow(Error);
        expect(() => { currencyConverter.convert('USD', null) } ).toThrow(Error);
        expect(() => { currencyConveqrter.convert(null, 0) } ).toThrow(Error);
    });

    it.skip('convert undefined value should throw Error', () => {
        expect(() => { currencyConverter.convert(undefined, undefined) } ).toThrow(Error);
        expect(() => { currencyConverter.convert('USD', undefined) } ).toThrow(Error);
        expect(() => { currencyConverter.convert(undefined, 0) } ).toThrow(Error);
    });


    it('convert negative values should work', () => {
        expect(currencyConverter.convert('USD', -1) ).toBeCloseTo(-1.07, 1);
        expect(currencyConverter.convert('USD', -2) ).toBeCloseTo(-2.14, 1);
    });

    it('converting octal numbers would work normally', () => {
        expect(currencyConverter.convert('USD', '08') ).toBe(8.56);
    });

    it('convert 32bit unsigned int max EUR to RUB', () => {
        expect(currencyConverter.convert('RUB', 4294967295) ).toBe(307863255705.60004);
    });

    it('EUR to USD should be 1.07', () => {
        expect(currencyConverter.convert('USD', 1)).toBeCloseTo(1.07, 1);
    });

    
    
});

















test('algebra is working on this computer', () => {
    expect(2+3).not.toBe(4);
});

test('regexp matcher is working', () => {
    expect('My test').toMatch(/test/);
});

test.skip('convert to unknown currency throws an Error', () => {
    expect(() => {currencyConverter.convert('XXX', 1)}).toThrow(Error);
});