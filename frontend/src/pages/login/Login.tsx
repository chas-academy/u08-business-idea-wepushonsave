import React, {useState, ChangeEvent, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({email: '', password: ''});
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {email, password} = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://mtg-tomb.onrender.com/user/login', {
        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
          mode: 'cors',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error logging in');
      }

      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-site-gradient items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">Login</h1>
        <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-site-gradient">
          {error && <div className="error">{error}</div>}
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1  focus:outline-periwinkle"

              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1 focus:outline-periwinkle"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-1 text-white rounded-md hover:text-aubergine bg-btn-gradient">
              Login
            </button>
          </form>
          <p>Not registred yet? Register<a href="/register"> here!</a></p>

        </div>

      </div>
    </>
  );
};

export default Login;
