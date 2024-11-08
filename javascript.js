var password = document.querySelector('#pwd');
var confirmPassword = document.querySelector('#cnf-pwd');
var passwordWarning = document.querySelectorAll('#passCheck');

function toggleWarningActive() {
    if ((password.value === '' && confirmPassword.value == '') ||
        (password.value === confirmPassword.value)) {
        password.classList.remove('warning-active');
        confirmPassword.classList.remove('warning-active');
        passwordWarning.forEach(element => {
            element.classList.remove('warning-active');
        });
    }
    else if (!password.classList.contains('warning-active')) {
        password.classList.add('warning-active');
        confirmPassword.classList.add('warning-active');
        passwordWarning.forEach(element => {
            element.classList.add('warning-active');
        });
    }
};

password.addEventListener('change', toggleWarningActive);
confirmPassword.addEventListener('change', toggleWarningActive);
