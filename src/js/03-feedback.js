import throttle from 'lodash.throttle';

const loginFofmEl = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-msg';

const formDate = {};

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

const onTextareaInput = event => {
  const message = event.target.value;

  localStorage.setItem(STORAGE_KEY, message);
};

const populateTextarea = () => {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
  }
};

loginFofmEl.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));
loginFofmEl.addEventListener('input', event => {
  formDate[event.target.name] = event.target.value;
  console.log(formDate);
});

populateTextarea();
