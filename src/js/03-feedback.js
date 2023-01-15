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
  if (!email.value) {
    return;
  }
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});
