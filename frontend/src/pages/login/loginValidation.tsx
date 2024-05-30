/* eslint-disable react/react-in-jsx-scope */

type Values = {
  email: string;
  password: string;
};
/* Added a type and added the 'Value' as datatype for 'values' */
const Validation = (values: Values) => {
  const errors: any = {};
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
  if (values.email === '') {
    errors.email = 'Email is required';
  } else if (!email_pattern.test(values.email)) {
    errors.email = 'Email is invalid';
  } else {
    errors.email = '';
  }
  if (values.password === '') {
    errors.password = 'Password is required';
  } else {
    /*else if(password_pattern.test(values.password))
        {
            errors.password = "Password is invalid";
        }*/
    errors.password = '';
  }
  return errors;
};
export default Validation;
