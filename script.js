const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('.email-field  span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('.password-field span.error');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('.confirm-password-field span.error');

var isPasswordValidated = false;
var isEmailValidated = false;


email.addEventListener('focusout', () => {

    if (email.validity.valid === false) {
        email.classList.remove('valid');
        email.classList.add('error');
        emailError.textContent = "Please enter a valid Email address.";
    } else {
        email.classList.remove('error');
        email.classList.add('valid');
        emailError.textContent = '';
    }
});

password.addEventListener('input', () => {
    isPasswordValidated = false;
    if (password.value.length === 0) {
        password.classList.remove('valid');
        password.classList.add('error');
        passwordError.textContent = "Password field is empty";
    
    } else if (password.value !== confirmPassword.value && confirmPassword.value.length > 0) {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('error');
        confirmPasswordError.textContent = "The passwords do not match.";
    
    } else if (password.value !== confirmPassword.value && confirmPassword.value.length === 0) {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('valid');
        confirmPasswordError.textContent = '';
    }
    
    else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        password.classList.add('valid');
        confirmPassword.classList.add('valid');
        confirmPasswordError.textContent = '';
        isPasswordValidated = true;
    }
    
    /* if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('valid');
        confirmPassword.validity.valid = true;
        confirmPasswordError.textContent = '';

    } else if (password.value !== confirmPassword.value && confirmPassword.value.length > 0) {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('error');
        confirmPassword.validity.valid = false;
        console.log(confirmPassword.validity.valid);
        confirmPasswordError.textContent = "The passwords do not match.";
    } */
});

confirmPassword.addEventListener('input', () => {

    if (password.value.length === 0 && confirmPassword.value.length > 0) {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('error');
        isPasswordValidated = false;
        confirmPasswordError.textContent = "Password field is empty.";

    } else if (password.value.length > 0 && confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('error');
        isPasswordValidated = false;
        confirmPasswordError.textContent = "The passwords do not match.";

    } else if (password.value.length > 0 && password.value === confirmPassword.value) {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('valid');
        isPasswordValidated = true;
        confirmPasswordError.textContent = '';
    }
});