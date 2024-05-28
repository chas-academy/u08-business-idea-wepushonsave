/* eslint-disable react/react-in-jsx-scope */
/**
 * SearchResults
 * when searching for @card @set @list @commander
 * Display the resaults after a given search
 */

import {useLoaderData, useNavigate} from 'react-router-dom';
import {IAPIResponse} from '../card/CardsArray';
import {getImageFromCardFaces} from '../../utils/getImageFromCardFaces';

const SearchResults: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  if (cards != null) {
    return (
      <>
        <div className="grid grid-cols-3 gap-1">
          {cards.map(card => {
            const imageUrl =
              card.card_faces && card.card_faces.length > 0
                ? getImageFromCardFaces(card.card_faces)
                : card.image_uris?.border_crop;
            const cardName =
              card.card_faces && card.card_faces.length > 0
                ? card.card_faces[0].name
                : card.name;
            return (
              <div key={card.id}>
                {imageUrl ? (
                  <img
                    onClick={() => getCardId(card.id)}
                    src={imageUrl}
                    alt={`${cardName} card image`}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            );
          })}
        </div>
      </>
    );

    return null;
  }
};

export default SearchResults;
