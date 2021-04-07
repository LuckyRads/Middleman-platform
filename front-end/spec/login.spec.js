const login = require('../login.js');

describe('Login', () => {
    it('user found', () => {
        expect(login.findUser('test@test.com', 'test')).toEqual({id:1, email: "test@test.com"});
    })
    it('user not found', () => {
        expect(login.findUser('abra', 'kadabra')).toBe(null);
    })
    it('login error', () => {
        expect(login.login()).toBe("error");
    })
    it('login success', () => {
        expect(login.login('test@test.com', 'test')).toBe("success");
    })
    it('user not found', () => {
        expect(login.login('test@test.com', 'testt')).toBe("User not found");
    })
})