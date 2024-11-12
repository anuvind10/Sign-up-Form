var password = document.querySelector('#pwd');
var confirmPassword = document.querySelector('#cnf-pwd');
var passwordWarning = document.querySelectorAll('#passCheck');
var passMatch = document.querySelector('#passMatch');
var email = document.querySelector('#email');
var phone = document.querySelector('#phone');
var emailCheck = document.querySelector('#emailCheck');
var phoneCheck = document.querySelector('#phoneCheck');

function toggleWarningActive() {
    if (this.id === 'pwd' || this.id === 'cnf-pwd') {
        if (password.value === '' && confirmPassword.value == '') {
                password.classList.remove('warning-active');
                confirmPassword.classList.remove('warning-active');
                passwordWarning.forEach(element => {
                    element.classList.remove('warning-active');
                });

                passMatch.classList.remove('match-active')
        }
        else if (!password.classList.contains('warning-active')) {
            password.classList.add('warning-active');
            confirmPassword.classList.add('warning-active');
            passwordWarning.forEach(element => {
                element.classList.add('warning-active');
            });

            passMatch.classList.remove('match-active')
        }
        else if (password.value === confirmPassword.value) {
            password.classList.remove('warning-active');
            confirmPassword.classList.remove('warning-active');
            passwordWarning.forEach(element => {
                element.classList.remove('warning-active');
            });

            passMatch.classList.add('match-active')
        }
    }
    else {
        if (!this.checkValidity()) {
            if (this.id === 'email')
                emailCheck.classList.add('warning-active');
            else if (this.id === 'phone')
                phoneCheck.classList.add('warning-active');
            this.classList.add('warning-active');
        }
        else {
            if (this.id === 'email')
                emailCheck.classList.remove('warning-active');
            else if (this.id === 'phone')
                phoneCheck.classList.remove('warning-active');
            this.classList.remove('warning-active');
        }
    }
};

password.addEventListener('keypress', toggleWarningActive);
confirmPassword.addEventListener('keypress', toggleWarningActive);
email.addEventListener('keypress', toggleWarningActive);
phone.addEventListener('keypress', toggleWarningActive);
password.addEventListener('focusout', toggleWarningActive);
confirmPassword.addEventListener('focusout', toggleWarningActive);
email.addEventListener('focusout', toggleWarningActive);
phone.addEventListener('focusout', toggleWarningActive);
