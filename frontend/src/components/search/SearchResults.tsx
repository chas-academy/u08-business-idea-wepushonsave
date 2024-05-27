/* eslint-disable react/react-in-jsx-scope */
/**
 * SearchResults
 * when searching for @card @set @list @commander
 * Display the resaults after a given search
 */

import {useLoaderData, useNavigate} from 'react-router-dom';
import {IAPIResponse} from '../card/CardsArray';

const SearchResults: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  console.log(cards);
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  if (cards != null) {
    return (
      <>
        <div className="grid grid-cols-3 gap-1">
          {cards.map(cards => (
            <div key={cards.id}>
              <img
                onClick={() => getCardId(cards.id)}
                src={cards.image_uris.border_crop}
                alt={cards.name + 'card image'}
              />
            </div>
          ))}
        </div>
      </>
    );

    return null;
  }
};

export default SearchResults;
