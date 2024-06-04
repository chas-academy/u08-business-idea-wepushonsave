import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logout2: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return <button onClick={handleLogout} className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-btn-gradient text-white font-semibold md:rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
              <span className="absolute inset-0 border-2 border-transparent hover:border-white rounded-lg"></span>
              LOGOUT
            </button>;
};

export default Logout2;
