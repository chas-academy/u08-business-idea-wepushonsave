import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount: React.FC = () => {
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            const response = await fetch('https://mtg-tomb.onrender.com/user/me/deleteuser', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                localStorage.removeItem('token');
                navigate('/register');
            } else {
                const data = await response.json();
                console.error(data.msg || 'Error deleting account');
            }
        } catch (err:any) {
            console.error('Error:', err.message);
        }
    };

    return (
        <button onClick={handleDeleteAccount}>Delete Account</button>
    );
};

export default DeleteAccount;
