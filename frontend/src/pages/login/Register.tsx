import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    username: string;
    email: string;
    password: string;
    password2: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate();

    const { username, email, password, password2 } = formData;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== password2) {
            console.error('Passwords do not match');
        } else {
            const newUser = { username, email, password };
            try {
                const response = await fetch('https://mtg-tomb.onrender.com/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    navigate('/');
                } else {
                    console.error(data.msg);
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
