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
    <div>
      <h1>Login</h1>
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
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
