/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Capitalizer from '../customs/customCapitalizer';
import { GiCrownedSkull } from "react-icons/gi";
import { CustomLoader } from '../customs/customLoader';

interface Commander {
  _id: string;
  name: string;
  rank: number;
  num_decks: number;
  imgSrc: string;
  themes: string[];
}

const TopCommanders: React.FC = () => {
  const [commanders, setCommanders] = useState<Commander[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();

  const fetchCommanders = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://MTGTombAPI.onrender.com/api/topcoms?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCommanders(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommanders(page);
  }, [page]);

  if (loading) {
    return <div className='w-full mt-80 flex justify-center content-center'><CustomLoader></CustomLoader></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex flex-col content-center max-w-[600px] text-silverpine'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-4">Top Commanders </h1>
        <div><GiCrownedSkull size={48} /></div>
        <div className="grid grid-cols-5 mb-3 mt-6 justify-items-center mx-6">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}>
            Previous
          </button>
          <div className="flex justify-end w-full">
            {page > 2 && (
              <button
                onClick={() => setPage(1)}
                className="w-8 h-full shadow-inner bg-plum rounded-lg text-sm bg-opacity-50">
                1
              </button>
            )}
          </div>
          <p className="text-center text-lg font-bold shadow-inner bg-plum rounded-lg w-12">
            {page}
          </p>
          <div className="flex justify-start w-full">
            {page < totalPages - 1 && (
              <button
                onClick={() => setPage(totalPages)}
                className="w-8 h-full shadow-inner bg-plum rounded-lg text-sm bg-opacity-25">
                {totalPages}
              </button>
            )}
          </div>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
      <div className="transition-max-height duration-300 overflow-x-auto shadow-inner snap-x snap-mandatory no-scrollbar w-[400px]">
        <ul className="pb-4 px-4 flex flex-row">
          {commanders.map(commander => (
            <li key={commander._id} className='snap-start flex-shrink-0 mx-2 top-0 w-[350px]'>
              <div 
                className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6 cursor-pointer h-full w-[350px]"
                onClick={() => navigate(`/commander/${encodeURIComponent(commander.name)}`, { state: { commander } })}
              >
                <h2 className="font-bold text-xl mb-2">Rank: {commander.rank}</h2>
                <img
                  src={commander.imgSrc}
                  alt={commander.name}
                  className="rounded-lg drop-shadow-md h-56"
                />
                <h2 className="text-lg font-bold my-2">{commander.name}</h2>
                <p>Decks: {commander.num_decks}</p>
                <h3 className="font-bold mb-2">Themes</h3>
                <ul className="grid grid-cols-6 gap-2">
                  {commander.themes.slice(0, 3).map((theme, index) => (
                    <li
                      key={index}
                      className="shadow-inner p-2 text-center text-sm font-semibold col-span-2 rounded-lg bg-plum">
                      <Capitalizer text={theme} />
                    </li>
                  ))}
                  {commander.themes.slice(3, 5).map((theme, index) => (
                    <li
                      key={index + 3}
                      className="shadow-inner p-2 text-center text-sm font-semibold col-span-3 rounded-lg bg-plum">
                      <Capitalizer text={theme} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopCommanders;