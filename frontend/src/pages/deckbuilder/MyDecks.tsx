/* eslint-disable react/react-in-jsx-scope */
import {useNavigate} from 'react-router-dom';
import mtgLogo from '../../assets/logo-MTG-TOMB.webp';
import {User} from '../../utils/MTGTombAPIInterfaces';
import {useEffect, useState} from 'react';

interface IDeck {
  _id: string;
  deckname: string;
}

const MyDecks = () => {
  const [newDeckName, setNewDeckName] = useState('');
  const [decks, setDecks] = useState<IDeck[]>([]);
  const [showCreateDeckModal, setShowCreateDeckModal] = useState(false);
  const [userId, setUserId] = useState<User | null>(null);
  const navigate = useNavigate();
  const navigateDeckBuilder = () => {
    navigate('/deck-builder');
  };
  const createDeckClick = async () => {
    setShowCreateDeckModal(true);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`http://localhost:3000/user/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setUserId(data._id);
      console.log(data._id);
    };
    fetchUserInfo();
  }, [userId]);

  const handleCreateDeck = async () => {
    try {
      const response = await fetch('http://localhost:3000/decks', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({name: newDeckName, userId}),
      });

      if (!response.ok) {
        throw new Error('Failed to create deck');
      }

      // Refresh the list of lists after creating a new one
      fetchDecks();
      setShowCreateDeckModal(false);
      navigateDeckBuilder();
    } catch (error) {
      console.error('Error creating deck:', error);
    }
  };

  const fetchDecks = async () => {
    try {
      const response = await fetch('http://localhost:3000/decks', {
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
      setDecks(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };
  return (
    <>
      <div className=" my-decks-page h-screen">
        <div className=" my-decks-nav flex justify-between">
          <div className="  my-decks-nav-icon w-20 flex justify-center items-center m-2">
            <img className="size-fit" src={mtgLogo} alt="" />
          </div>
          <div className=" my-decks-add-button w-20 flex justify-center items-center m-2">
            <button onClick={createDeckClick}>Create a deck</button>
          </div>
          <div className="create-deck-modal">
            {showCreateDeckModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold mb-4">
                    Create a New Deck
                  </h2>
                  <input
                    type="text"
                    value={newDeckName}
                    onChange={e => setNewDeckName(e.target.value)}
                    placeholder="Enter deck name"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={handleCreateDeck}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mr-2">
                      Create
                    </button>
                    <button
                      onClick={() => setShowCreateDeckModal(false)}
                      className="border px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <section className="  w-full my-decks-body">
          <div className=" my-decks-h1 text-2xl text-center text-white">
            My Decks
          </div>
          <div className="my-decks-grid-view  flex flex-wrap">
            <div className=" my-decks-commanders size-3/6 p-2 sm:size-3/12">
              <a href="/deck-builder">
                <img
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </a>
            </div>
            <div className="my-decks-commanders size-3/6 sm:size-3/12 p-2">
              <a href="/deck-builder">
                <img
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </a>
            </div>
            <div className="my-decks-commanders size-3/6 sm:size-3/12 p-2">
              <a href="/deck-builder">
                <img
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </a>
            </div>
            <div className="my-decks-commanders size-3/6 sm:size-3/12 p-2">
              <a href="/deck-builder">
                <img
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </a>
            </div>
            <div className="my-decks-commanders size-3/6 sm:size-3/12 p-2">
              <a href="/deck-builder">
                <img
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyDecks;
