/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  //When registred successfully send to login
  const navigate = useNavigate() 
  
  const [currentError, setCurrentError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };
console.log(form.email, form.username, form.password)
    if (form.username.value && form.email.value && form.password.value) {
      try {
        const response = await fetch(
          'http://localhost:3000/api/user/register',
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          }
        );
        if (!response.ok) {
          throw new Error('Register not successful, please try again');
        } 
        setCurrentError("")
        navigate("/login")

      } catch (error: any) {
        console.error(
          'Register not successful...',
          error
        );
        setCurrentError(error.message)
      }
      //submit error in some state to display to user
      //what happens after register, redirect to home
    } else {
      setCurrentError('Username, email and password are required!');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">
          Register
        </h1>
        <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-profile-content">
          <form onSubmit={handleSubmit}>
            <ul className="mb-6 space-y-4">
              <li className=" font-bold">
                Username:
                <input
                  required
                  type="text"
                  name="username"
                  className="w-full p-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
                  placeholder="Username"
                />
              </li>
              <li className=" font-bold">
                Email adress:
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full p-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
                  placeholder="Email"
                />
              </li>
              <li className=" font-bold">
                Password:
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 mt-2 text-gray-700 placeholder:text-black placeholder-opacity-75 focus:outline-none"
                  placeholder="Password"
                />
              </li>
            </ul>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 text-white rounded-md hover:text-aubergine bg-btn-gradient">
                Register
              </button>
            </div>
          </form>
          <h2
          //onClick={() => navigateHome()}
          >
            Not registred yet? Click here!
          </h2>
        </div>
        <div>{currentError}</div>
      </div>
    </>
  );
};

export default RegisterUser;
