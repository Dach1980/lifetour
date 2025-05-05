const formElement = document.querySelector('.form__fields');
const errorMessageElement = document.querySelector('.form__error');
const phoneInput = formElement.querySelector('#client-phone');
const emailInput = formElement.querySelector('#client-email');
const phoneLabel = formElement.querySelector('.form-field__name--phone');
const emailLabel = formElement.querySelector('.form-field__name--email');

const clearErrorMessages = () => {
  if (errorMessageElement.classList.contains('form__error--is-error')) {
    errorMessageElement.classList.remove('form__error--is-error');
    errorMessageElement.textContent = '';
    phoneInput.classList.remove('form-field__inp--invalid');
    emailInput.classList.remove('form-field__inp--invalid');
  }
};

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const phonePattern = /^[0-9]*$/i;
  const emailPattern = /.+@.+\..+/i;
  let phoneErrorText = '';
  let emailErrorText = '';

  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.classList.add('form-field__inp--invalid');
    phoneErrorText = 'Номер телефона должен содержать цифры от 0 до 9.';
  }

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('form-field__inp--invalid');
    emailErrorText = 'В e-mail должен быть символ @ и домен через точку';
  }

  if ((!phonePattern.test(phoneInput.value)) || (!emailPattern.test(emailInput.value))) {
    errorMessageElement.textContent = `${phoneErrorText} ${emailErrorText}`;
    errorMessageElement.classList.add('form__error--is-error');
    return;
  }

  formElement.submit();
});

const toggleLabelsVisibility = () => {
  phoneLabel.style.display = phoneInput.value !== '' ? 'none' : 'block';
  emailLabel.style.display = emailInput.value !== '' ? 'none' : 'block';
};

formElement.addEventListener('input', clearErrorMessages);
phoneInput.addEventListener('focus', clearErrorMessages);
emailInput.addEventListener('focus', clearErrorMessages);
formElement.addEventListener('input', toggleLabelsVisibility);
