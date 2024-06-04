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

interface User {
  _id: string;
  username: string;
  email: string;
}

const AllThemes: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

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

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://mtg-tomb.onrender.com/user/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemes(page);
    fetchUser();
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
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-4">All Themes</h1>
        <div>
          <p>Id: {user?._id}</p>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email}</p>
        </div>
        <div>
          <GiEvilWings size={56} />
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
      <div className="overflow-y-auto h-[650px] pb-2 px-4 no-scrollbar">
        <ul className="space-y-4">
          {themes.map(theme => (
            <li key={theme._id}>
              <div
                className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6 cursor-pointer"
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
                <ul className="flex flex-row">
                  {theme.criteria.oracle_text.map((text, index) => (
                    <li key={index} className="mx-2">
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
