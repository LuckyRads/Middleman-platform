const register = require('../register.js');

describe('Registration', () => {
    it('password matching', () => {
        expect(register.doPasswordsMatch('passwordas123', 'passwordas123')).toBe(true);
    })
    it('password matching', () => {
        expect(register.doPasswordsMatch('passwordas', 'passwordas123')).toBe(false);
    })
    it('password validation', () => {
        expect(register.isPasswordValid('#PasswordaS123456')).toBe('valid');
    })
    it('password validation', () => {
        expect(register.isPasswordValid('trumpas')).toBe('Password is too short!');
    })
    it('complete regisration', () => {
        expect(register.register('useris@mail.com', '#PasswordaS123456', '#PasswordaS123456')).toBe('Registered user: useris@mail.com successfully');
    })
    it('complete regisration', () => {
        expect(register.register('useris@mail.com', 'asdasdasd', 'asdasdasds')).toBe('Passwords do not match!');
    })
    it('complete regisration', () => {
        expect(register.register('useris@mail.com', 'asd', 'asd')).toBe('Password is too short!');
    })
})