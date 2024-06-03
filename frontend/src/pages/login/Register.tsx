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
        <div className="flex flex-col bg-site-gradient items-center justify-center min-h-screen text-white">
            <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">Register</h1>
            <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-profile-content">

                <form onSubmit={onSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={onChange}
                            required
                            className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1  focus:outline-periwinkle"

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
                            className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1 focus:outline-periwinkle"

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
                            className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1 focus:outline-periwinkle"

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
                            className="w-full p-2 text-gray-700 placeholder:text-gray-500/80 m-1 focus:outline-periwinkle"

                        />
                    </div>
                    <button type="submit"
                        className="px-4 py-1 text-white rounded-md hover:text-aubergine bg-btn-gradient">
                        Register</button>
                </form>
                <p>Already Registered? Login<a href="/register"> here!</a></p>

            </div>
        </div>
    );
};

export default Register;
