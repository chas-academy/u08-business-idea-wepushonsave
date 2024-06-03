import React from 'react';
import Logout from './Logout';
import ChangePassword from './ChangePassword';
import DeleteAccount from './Delete';

const Navigation2: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ChangePassword />
                </li>
                <li>
                    <DeleteAccount />
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation2;