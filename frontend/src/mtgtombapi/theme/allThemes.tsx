/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Capitalizer from '../customs/customCapitalizer';
import {GiEvilWings} from 'react-icons/gi';
import {CustomLoader} from '../customs/customLoader';

interface Theme {
  _id: string;
  name: string;
  criteria: {
    oracle_text: string[];
  };
  explanation: string;
  count: number;
  cardCount: number;
  commanderCards: string[];
}

const AllThemes: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();

  const fetchThemes = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://mtgtombapi.onrender.com/api/themes/details?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setThemes(data.themes);
      setTotalPages(data.totalPages);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemes(page);
  }, [page]);

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
    <div className='flex flex-col content-center max-w-[600px] text-silverpine h-full'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-4">All Themes</h1>

        <div>
          <GiEvilWings size={60} />
        </div>
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
      <div className=" max-w-[400px] max-h-0">
        <ul className="pb-4 px-4 flex flex-row transition-max-height duration-300 overflow-x-auto shadow-inner snap-x snap-mandatory no-scrollbar">
          {themes.map(theme => (
            <li key={theme._id} className='snap-start flex-shrink-0 mx-2 top-0 w-[350px] items-center m-10'>
              <div
                className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6 cursor-pointer h-full"
                onClick={() =>
                  navigate(`/theme/${encodeURIComponent(theme.name)}`, {
                    state: {theme},
                  })
                }>
                <h2 className="font-bold text-2xl mb-2">
                  <Capitalizer text={theme.name} />
                </h2>
                <p className="text-lg">{theme.explanation}</p>
                <p className="text-lg font-semibold">Keywords:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {theme.criteria.oracle_text.map((text, index) => (
                    <li key={index} className='mx-2 rounded-lg p-2 shadow-inner bg-plum text-center'>
                        <Capitalizer text={text} />
                    </li>
                  ))}
                </ul>
                <p className="mt-2">
                  <strong>Commander Count:</strong> {theme.count}
                </p>
                <p>
                  <strong>Card Count:</strong> {theme.cardCount}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllThemes;
