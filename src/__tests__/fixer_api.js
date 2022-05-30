require('../fixer_api');

describe("FixerAPI", () => {
    
    it('should get new currency conversion rates', async () => {
        await expect(fixer_api.getRates()).resolves.toHaveProperty('rates');
    });
});