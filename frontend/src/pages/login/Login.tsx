/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable  @typescript-eslint/no-explicit-any */ // Line 42

import {useState} from 'react';
import Validation from './loginValidation';

import {useNavigate} from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const errorCheck = Validation(values);
    setErrors(errorCheck);

    if (!errorCheck.email && !errorCheck.password) {
      try {
        const response = await fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          throw new Error('Login not successful, please try again');
        }
        navigate('/');
      } catch (error: any) {
        console.log('Login not successful', error);
        setLoginError(error.message);
      }
    } else {
      console.log('Errors');
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">Login</h1>
        <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-profile-content">
          <form onSubmit={handleSubmit}>
            <ul className="mb-6 space-y-4">
              <li className=" font-bold">
                Email adress:
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
                  placeholder="Email"
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="text-danger"> {errors.email} </span>
                )}
              </li>
              <li className=" font-bold">
                Password:
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 mt-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
                  placeholder="Password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="text-danger"> {errors.password} </span>
                )}
              </li>
            </ul>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 text-white rounded-md hover:text-aubergine bg-btn-gradient">
                Login
              </button>
            </div>
          </form>
          <a href="/register">Not registred yet? Click here!</a>
        </div>
        <div>{loginError}</div>
      </div>
    </>
  );
};
export default LoginUser;
