import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('https://mtg-tomb.onrender.com/user/password', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || 'Error changing password');
      } else {
        setMessage(data.msg);
        setError(null);
        navigate('/');
      }
    } catch (err: any) {
      setError('Error changing password');
      console.error('Error:', err.message);
    }
  };

  return (
    <div>
      <h1>Change Password</h1>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleChangePassword}>
        <div>
          <label htmlFor="oldPassword">Current Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
