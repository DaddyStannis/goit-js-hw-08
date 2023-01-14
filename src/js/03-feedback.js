import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = form.elements['email'];
const message = form.elements['message'];

try {
  const formFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = formFeedback.email;
  message.value = formFeedback.message;
} catch (error) {}

form.addEventListener(
  'input',
  _.throttle(() => {
    const data = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Email: ', email.value, 'Message: ', message.value);
  event.currentTarget.removeEventListener();
  localStorage.removeItem('feedback-form-state');
});
