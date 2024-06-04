/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import Collapsable from '../components/reusable_collapsable/Collapsable';

interface IList {
  _id: string;
  title: string;
}

const CollapsableCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lists, setLists] = useState<IList[]>([]);

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
    fetchLists();
  }, []);

  // Define your onClick handler to toggle the collapsible
  const handleToggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white">
      {/* Use the Collapsable component and pass necessary props */}
      <Collapsable
        titles="Lists"
        content={
          <div>
            {lists.map(list => (
              <button
                key={list._id}
                className="p-3 w-full text-left rounded-lg font-inter text-xl text-black mb-2 bg-collection-btn-grey shadow-md border-l-4 border-orange"
                onClick={() => console.log(list._id)} 
              >
                {list.title}
              </button>
            ))}
          </div>
        }
        isOpen={isOpen}
        onClick={handleToggleCollapsible}
      />
    </div>
  );
};

export default CollapsableCards;
