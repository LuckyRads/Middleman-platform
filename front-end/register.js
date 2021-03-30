function register(email, password, repeatedPassword) {
    emailPreference = getEmailPreference();

    if (!doPasswordsMatch(password, repeatedPassword)) {
        return 'Passwords do not match!'
    }
    var validationMessage = isPasswordValid(password);
    if (validationMessage != 'valid') {
        return validationMessage;
    }

    // send login request to server
    return `Registered user: ${email} successfully`;
}

function getEmailPreference() {
    var preferenceSelect = document.getElementById('email-preference');
    var emailPreference = preferenceSelect.options[preferenceSelect.selectedIndex].value;
    return emailPreference
}

function isPasswordValid(password) {
    if (password.length < 8) {
        return 'Password is too short!'
    }
    return 'valid';
}

function doPasswordsMatch(password, repeatedPassword) {
    return password === repeatedPassword;
}

module.exports = {
    register,
    isPasswordValid,
    doPasswordsMatch
};