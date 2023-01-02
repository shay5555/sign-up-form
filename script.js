const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('.email-field  span.error');


email.addEventListener('focusin', () => {

});

email.addEventListener('focusout', () => {
    if (email.validity.valid === false) {
        email.classList.remove('valid');
        email.classList.add('error');
        emailError.textContent = "\tPlease enter a valid Email address.";
    } else {
        email.classList.remove('error');
        email.classList.add('valid');
        emailError.textContent = '';
    }
});

form.addEventListener('submit', (e) => {
    if(!firstName.validity.valid) {
        showError(firstName, firstNameError);
        e.preventDefault();
    }
});
