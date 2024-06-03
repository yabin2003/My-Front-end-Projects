// Selecting elements
const form = document.querySelector('.form1');
const username = document.querySelector('.user');
const password = document.querySelector('.pwd');
const forgotPassword = document.querySelector('.f_pwd');
const submit = document.querySelector('.btn');
const createAccount = document.querySelector('.create');

// Adding event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Validate form data and send it to the server
  const formData = new FormData(form);
  console.log(formData);
});

forgotPassword.addEventListener('click', () => {
  // Handle forgot password functionality
  console.log('Forgot password clicked');
});

createAccount.addEventListener('click', () => {
  // Handle create account functionality
  console.log('Create account clicked');
});

