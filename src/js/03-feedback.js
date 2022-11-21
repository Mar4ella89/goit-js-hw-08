import throttle from 'lodash.throttle';

const loginFofmEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-data';

let formData = {};

const onFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const onFormData = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const populateTextarea = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(savedData);
    console.log(formData);
  }
  emailInput.value = formData.email;
  textarea.value = formData.message;

  // console.log(loginFofmEl.elements)
  // for (const key in formData) {
  //   loginFofmEl.elements[key].value = formData[key]
  // }
};

populateTextarea();

loginFofmEl.addEventListener('submit', onFormSubmit);
loginFofmEl.addEventListener('input', throttle(onFormData, 500));
