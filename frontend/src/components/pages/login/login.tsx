import { useState } from "react";
import Validation from "./loginValidation";


const loginUser = () => {

const [values, setValues] = useState({
    email: "",
    password: ""
});

const [errors, setErrors] = useState({
   email: "",
   password: ""
 });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setErrors(Validation(values));
        
      };

    const handleInput = (event: any) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    };


  return (
    <>
        <h1 className="text-3xl font-bold text-center">Login</h1>
      <form action="" onSubmit={handleSubmit}
      className="flex flex-col space-y-4">
        <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter email"
                onChange={handleInput}
            />
            {errors.email && <span className="text-danger"> {errors.email} </span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
          {errors.password && <span className="text-danger"> {errors.password} </span>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default loginUser;
