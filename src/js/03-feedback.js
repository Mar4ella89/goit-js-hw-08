import throttle from 'lodash.throttle';

const loginFofmEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-data';

const formData = {};

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

loginFofmEl.addEventListener('submit', onFormSubmit);
loginFofmEl.addEventListener('input', throttle(onFormData, 500));

const populateTextarea = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  console.log(parsedData);

  if (parsedData) {
    emailInput.value = parsedData.email;
    textarea.value = parsedData.message;
  }
};

populateTextarea();
