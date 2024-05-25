
//import { useState } from "react";

/*const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [register, setRegister] = useState(false);*/

const registerUser = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(e.target)
    const form = (e.currentTarget)
    const formdata = {
      email: form.email.value,
      password: form.password.value
    }
 //fetch or axxios call to api point
    
    alert("User registered successfully!");
  };

  return (
    <>

<h1 className="text-3xl font-bold text-center">Register</h1>
<form action="" onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
  <div className="bg-white rounded-lg shadow-md px-8 py-6 flex flex-col space-y-4">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium mb-2">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Email"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="text-sm font-medium mb-2">
        Choose a password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Password"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</form>

      
    </>
  );
};

export default registerUser;

/*
<h1 className="text-3xl font-bold text-center">Register</h1>
      <form action="" onSubmit={handleSubmit}
      className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"            
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2">
            Choose a password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
*/