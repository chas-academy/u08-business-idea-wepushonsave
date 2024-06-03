import { useEffect, useState } from 'react';
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/profile-icon.webp';

interface IList {
  _id: string;
  title: string;
}

const ProfilePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('info');
  const [userData, setUserData] = useState<any>({});
  const [lists, setLists] = useState<IList[]>([]);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const settingsClick = () => {
    navigate('/profile-dashboard');
  };
  const mycollectionClick = () => {
    navigate('/mycollection');
  };
  const mycollectionRareClick = () => {
    navigate('/mycollection-rare');
  };
  const mycollectionCommonsClick = () => {
    navigate('/mycollection-commmons');
  };

  const createListClick = async () => {
    setShowCreateListModal(true);
  };

  const handleCreateList = async () => {
    try {
      // Call the createList function here with newListName
      const response = await fetch('https://mtg-tomb.onrender.com/api/lists', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ title: newListName }),
      });

      if (!response.ok) {
        throw new Error('Failed to create list');
      }

      // Refresh the list of lists after creating a new one
      fetchLists();
      setShowCreateListModal(false);
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  const fetchLists = async () => {
    try {
      const response = await fetch('https://mtg-tomb.onrender.com/api/lists', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch lists');
      }

      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchLists();
  }, []);

  // Fetch user's information from the server using the token and update the state
  const fetchUserData = async () => {
    try {
      const response = await fetch('https://mtg-tomb.onrender.com/api/profile-info', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          credentials: 'include',
          mode: 'cors',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleListClick = (listId: string) => {
    navigate(`/cards-display/${listId}`);
  };

  const logout = () => {
    navigate("/login")
  }

  return (
    <div className="shadow-md md:pt-32 ">
      <div className="flex justify-between items-start p-6 h-64 bg-profile-background bg-cover h-full w-full md:bg-profile-background-desktop">
        <div className="flex flex-col items-center ml-2">
          <img
            src={profileIcon}
            alt="Profile"
            className="w-28 h-28 mt-28 mb-1 rounded-full bg-custom-purple-600 border-4 border-custom-purple-800"
          />
          <div className="mb-5">
            <h1 className="text-xl font-bold text-white">
              {userData.username || ''}
            </h1>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="mt-4 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50">
              <path
                fill="white"
                opacity="0.5"
                d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0">
              <button
                onClick={settingsClick}
                className="block bg-collection-btn w-full text-center text-white px-6 py-1 mb-1 text-gray-700 rounded hover:bg-gray-100">
                Settings
              </button>
              <button
                onClick={logout}
                className="block bg-collection-btn w-full text-center text-white px-6 py-1 text-gray-700 rounded hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-profile-content">
        <nav className="grid grid-cols-2 bg-inactive-card-btn-gradient">
          <button
            className={`${activeSection === 'info'
              ? 'card-details-active card-info'
              : 'card-details-not-active'
              }`}
            onClick={() => setActiveSection('info')}>
            Collection
          </button>
          <button
            className={`${activeSection === 'lists'
              ? 'card-details-active card-market'
              : 'card-details-not-active'
              }`}
            onClick={() => setActiveSection('lists')}>
            Lists
          </button>
        </nav>

        <div className="mt-6">
          {activeSection === 'info' && (
            <div className="flex flex-col items-center">
              <button
                className="p-9 w-11/12 md:w-1/3 rounded-lg font-inter text-xl text-center text-white font-bold mb-5 bg-collection-btn shadow-md"
                onClick={mycollectionClick}>
                MY CARD COLLECTION
              </button>
              <button
                className="p-9 w-11/12 md:w-1/3 rounded-lg font-inter text-xl text-black mb-5 bg-collection-btn-grey shadow-md border-l-8 border-orange"
                onClick={mycollectionRareClick}>
                RARE
              </button>
              <button
                className="p-9 w-11/12 md:w-1/3 rounded-lg font-inter text-xl text-black mb-5 bg-collection-btn-grey shadow-md border-l-8 border-orange"
                onClick={mycollectionCommonsClick}>
                COMMONS
              </button>
            </div>
          )}

          {activeSection === 'lists' && (
            <div className="flex flex-col items-center">
              <button
                onClick={createListClick}
                className="p-9 w-11/12 md:w-1/3 rounded-lg font-inter text-xl text-black mb-5 bg-collection-btn-grey shadow-md border-l-8 border-orange">
                CREATE A LIST
              </button>
              {lists.map(list => (
                <button
                  key={list._id}
                  className="p-9 w-11/12 md:w-1/3 rounded-lg font-inter text-xl text-black mb-5 bg-collection-btn-grey shadow-md border-l-8 border-orange"
                  onClick={() => handleListClick(list._id)}>
                  {list.title}
                </button>
              ))}
            </div>
          )}

          {/* Create List Modal */}
          {showCreateListModal && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">
                  Create a New List
                </h2>
                <input
                  type="text"
                  value={newListName}
                  onChange={e => setNewListName(e.target.value)}
                  placeholder="Enter list name"
                  className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleCreateList}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mr-2">
                    Create
                  </button>
                  <button
                    onClick={() => setShowCreateListModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
