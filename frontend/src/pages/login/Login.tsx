import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
interface FormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
=======
import { useState } from 'react';
import Validation from './loginValidation';

import { useNavigate } from 'react-router-dom';
>>>>>>> da7ee51f6d22f0e644e34ed59680312cbd1e35bb

    const { email, password } = formData;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('https://mtg-tomb.onrender.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

<<<<<<< HEAD
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
=======
    if (!errorCheck.email && !errorCheck.password) {
      try {
        const response = await fetch('https://mtg-tomb.onrender.com/api/user/login', {
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
>>>>>>> da7ee51f6d22f0e644e34ed59680312cbd1e35bb

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
<<<<<<< HEAD

export default Login;
=======
export default LoginUser;
>>>>>>> da7ee51f6d22f0e644e34ed59680312cbd1e35bb
