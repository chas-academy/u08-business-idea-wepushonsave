/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import Validation from './loginValidation';


const LoginUser = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const errorCheck = Validation(values);
    setErrors(errorCheck);

    if (!errorCheck.email && !errorCheck.password) {
      fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values)
      }).then(
        (response) => {
          console.log(response.headers)
        }
      );
    } else {
      console.log('Errors');
    }
  };
  const handleInput = (event: any) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="">
        <h1 className="">Login</h1>
        <div className="">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              className=""
              placeholder="Email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger"> {errors.email} </span>
            )}

            <input
              type="password"
              id="password"
              name="password"
              className=""
              placeholder="Password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-purple-200 text-white rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginUser;

/*
<div className="relative w-64 h-64 mx-auto">
  <div className="w-full h-full bg-purple-600 rounded-md"></div> <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
    <h1 className="text-3xl font-bold text-gray-800">Login</h1> </div>

  <div className="absolute bottom-0 left-0 w-full h-48 flex flex-col items-center">
    <div className="w-full p-4 bg-purple-600 rounded-md">
    <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
        placeholder="Email"
        onChange={handleInput} />
      <input
        type="password"
        id="password"
        name="password"
        className="w-full p-2 mt-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
        placeholder="Password"
        onChange={handleInput} />
    

    <button type="submit" className="mt-4 px-4 py-2 bg-purple-200 text-white rounded-md">Login</button>
    </form>
    </div>
  </div>
</div>

*/
