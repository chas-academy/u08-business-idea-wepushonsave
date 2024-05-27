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
  console.log(cards[0].card_faces[0].name);
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  if (cards != null) {
    return (
      <>
        <div className="grid grid-cols-3 gap-1">
          {cards.map((card, index: number) => (
            <div key={card.id}>
              <img
                onClick={() => getCardId(card.id)}
                src={
                  card.card_faces && card.card_faces.length > 0
                    ? card.card_faces[index].image_uris.border_crop
                    : card.image_uris.border_crop
                }
                alt={
                  card.card_faces && card.card_faces.length > 0
                    ? card.card_faces[index].name
                    : card.name
                }
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
