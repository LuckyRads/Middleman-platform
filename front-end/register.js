function register(email, password) {
    // send login request to server
    emailPreference = getEmailPreference();
    console.log(email, password, emailPreference);
}

function getEmailPreference() {
    var preferenceSelect = document.getElementById('email-preference');
    var emailPreference = preferenceSelect.options[preferenceSelect.selectedIndex].value;
    return emailPreference
}