/* eslint-disable react/react-in-jsx-scope */

const RegisterUser = () => {
  /*const navigate = useNavigate() 
  const navigateHome = async() => {
    navigate("/Register")
   }*/
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
  <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">
        Login
      </h1>
      <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-profile-content">
        
        <form onSubmit={handleSubmit}>
          <ul className="mb-6 space-y-4">
          <li className=" font-bold">
              Username:
                <input
                  type="text"
                  name="username"
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Username"
                />
              </li>
            <li className=" font-bold">
              Email adress:
                <input
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
                Login
              </button>
            </div>
          </form>
          <h2
          //onClick={() => navigateHome()}
          >Not registred yet? Click here!</h2>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;