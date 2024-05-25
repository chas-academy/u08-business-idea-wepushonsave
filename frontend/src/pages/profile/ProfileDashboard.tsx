import {useState, useEffect} from 'react';

//NO BACKEND YET, SO DON'T KNOW IF THIS CODE WORKS
const ProfileDashboard = () => {
  const [userData, setUserData] = useState<any>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  // Taking user's information from db with token and update the state of userData with this data
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // When event from HTML happens, this function will update the state of userData with the new data typed by the user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  };

  // When event from form happens, this functions will send a POST request in json format to the db tto update data
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      } else {
        setIsEditing(false); // Disable editing mode after successful save
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  // This function is used when the edit button is clicked, so it makes it possible to modify the information
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl md:text-5xl md:mb-20 font-bold mb-4">
        Profile Dashboard
      </h1>
      <div className="flex flex-col md:w-1/3 w-5/6 p-5 rounded-xl shadow-lg bg-profile-content">
        <div className="flex justify-end items-center mb-4">
          <button
            className="px-4 py-2 text-white rounded-md hover:text-aubergine"
            onClick={toggleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <ul className="mb-6 space-y-4">
            <li className=" font-bold">
              Username:
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={userData.username || ''}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span>{userData.username || ''}</span>
              )}
            </li>
            <li className=" font-bold">
              Email address:
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email || ''}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span>{userData.email || ''}</span>
              )}
            </li>
            <li className=" font-bold">
              Password:
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={userData.password || ''}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span>{userData.password || ''}</span>
              )}
            </li>
          </ul>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-1 text-white rounded-md hover:text-aubergine bg-btn-gradient">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDashboard;
