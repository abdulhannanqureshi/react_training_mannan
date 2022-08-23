export default function validateInfo(values) {
  let errors = {};

  if (Object.keys(values).includes('username') && !values.username.trim()) {
    errors.username = 'Username required';
  } else if (Object.keys(values).includes('username') && !/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = 'Enter a valid username';
  }

  if (Object.keys(values).includes('email') && !values.email) {
    errors.email = 'Email required';
  } else if (Object.keys(values).includes('email') && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (Object.keys(values).includes('password') && !values.password) {
    errors.password = 'Password is required';
  } else if (Object.keys(values).includes('password') && values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (Object.keys(values).includes('confirmPassowrd') && !values.confirmPassowrd) {
    errors.confirmPassowrd = 'Password is required';
  } else if (Object.keys(values).includes('confirmPassowrd') && (values.confirmPassowrd !== values.password)) {
    errors.confirmPassowrd = 'Passwords do not match';
  }

  return errors;
}
