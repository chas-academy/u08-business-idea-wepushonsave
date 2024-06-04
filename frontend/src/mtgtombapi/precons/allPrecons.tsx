/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CustomLoader} from '../customs/customLoader';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { GiBleedingHeart } from 'react-icons/gi';

interface PreconYear {
  year: string;
  sets: {
    [key: string]: {
      title: string;
      decks: string[];
    };
  };
}

const PreconYearsList: React.FC = () => {
  const [preconYears, setPreconYears] = useState<PreconYear[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSet, setOpenSet] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchPreconYears = async () => {
    setError(null);
    try {
      const response = await fetch(
        'https://MTGTombAPI.onrender.com/api/preconrelease'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setPreconYears(result);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const toggleSet = (setKey: string) => {
    setOpenSet(openSet === setKey ? null : setKey);
  };

  useEffect(() => {
    fetchPreconYears();
  }, []);

  if (loading) {
    return (
      <div className="w-full mt-80 flex justify-center content-center">
        <CustomLoader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex flex-col justify-center '>
      <h1 className="text-4xl font-bold text-center">Commander Precons</h1>
      <div className='flex justify-center m-3'>
      <GiBleedingHeart size={60} />
      </div>
      {preconYears.map(yearObj => (
        <div key={yearObj.year}>
          <h2 className="text-3xl font-bold mt-6 ml-2">{yearObj.year}</h2>
          {Object.keys(yearObj.sets).map(setKey => (
            <div key={setKey}>
              <div
                className="flex justify-between items-center cursor-pointer mt-2 p-2 bg-custom-purple-800 rounded-t-lg"
                onClick={() => toggleSet(setKey)}>
                <h3 className="text-2xl font-bold">
                  {yearObj.sets[setKey].title}
                </h3>
                <div>
                  {openSet === setKey ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {openSet === setKey && (
                <div className='bg-plum p-4 shadow-inner rounded-b-lg'>
                    <ul className="ml-4 mt-2">
                  {yearObj.sets[setKey].decks.map(deckName => (
                    <li
                      key={deckName}
                      className="cursor-pointer text-2xl mt-2 font-semibold"
                      onClick={() =>
                        navigate(`/precons/${encodeURIComponent(deckName)}`)
                      }>
                      {deckName}
                      <hr className='border-aubergine'/>
                    </li>
                  ))}
                </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreconYearsList;
