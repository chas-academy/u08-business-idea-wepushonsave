/* eslint-disable react/react-in-jsx-scope */

const RegisterUser = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };

    if (form.username && form.email && form.password) {
      fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
    } else {
      console.log('Errors');
    }

    alert('User registered successfully!');
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg shadow-md px-8 py-6 flex flex-col space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="username"
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterUser;

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
