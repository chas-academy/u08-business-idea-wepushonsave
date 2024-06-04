import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return <button onClick={handleLogout}
  className='block bg-collection-btn w-full text-center text-white px-6 py-1 text-gray-700 rounded hover:bg-gray-100'>Logout</button>;
};

export default Logout;
