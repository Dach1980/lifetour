const formEl = document.querySelector('.form__fields');
const errorEl = document.querySelector('.form__error');
const inpPhone = formEl.querySelector('#client-phone');
const inpEmail = formEl.querySelector('#client-email');
const labelPhone = formEl.querySelector('.form-field__name--phone');
const labelEmail = formEl.querySelector('.form-field__name--email');

const resetError = () => {
  if (errorEl.classList.contains('form__error--is-error')) {
    errorEl.classList.remove('form__error--is-error');
    errorEl.textContent = '';
    inpPhone.classList.remove('form-field__inp--invalid');
    inpEmail.classList.remove('form-field__inp--invalid');
  }
};

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const phonePattern = /^[0-9]*$/i;
  const emailPattern = /.+@.+\..+/i;
  let phoneErrorText = '';
  let emailErrorText = '';

  if (!phonePattern.test(inpPhone.value)) {
    inpPhone.classList.add('form-field__inp--invalid');
    phoneErrorText = 'Номер телефона должен содержать только цифры от 0 до 9.';
  }

  if (!emailPattern.test(inpEmail.value)) {
    inpEmail.classList.add('form-field__inp--invalid');
    emailErrorText = 'E-mail должен содержать знак @ и домен через знак точки.';
  }

  if ((!phonePattern.test(inpPhone.value)) || (!emailPattern.test(inpEmail.value))) {
    errorEl.textContent = `${phoneErrorText} ${emailErrorText}`;
    errorEl.classList.add('form__error--is-error');
    return;
  }

  formEl.submit();
});

const hideLabel = () => {
  if (inpPhone.value !== '') {
    labelPhone.style.display = 'none';
  } else {
    labelPhone.style.display = 'block';
  }

  if (inpEmail.value !== '') {
    labelEmail.style.display = 'none';
  } else {
    labelEmail.style.display = 'block';
  }
};

formEl.addEventListener('input', resetError);
inpPhone.addEventListener('focus', resetError);
inpEmail.addEventListener('focus', resetError);
formEl.addEventListener('input', hideLabel);
