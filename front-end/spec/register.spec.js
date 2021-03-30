const register = require('../register.js');

describe('Registration', function () {
    it('passwords match', function () {
        expect(register.doPasswordsMatch('passwordas123', 'passwordas123')).toBe(true);
    })
})