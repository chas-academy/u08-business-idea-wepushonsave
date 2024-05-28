/* eslint-disable react/react-in-jsx-scope */
/**
 * SearchResults
 * when searching for @card @set @list @commander
 * Display the resaults after a given search
 */

import {useLoaderData, useNavigate} from 'react-router-dom';
import {IAPIResponse, ICardFaces} from '../card/CardsArray';

const SearchResults: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  const getCardFaceImage = (card_faces: ICardFaces[]): string | undefined => {
    for (const face of card_faces) {
      if (face.image_uris && face.image_uris.border_crop) {
        return face.image_uris.border_crop;
      }
    }
    return undefined;
  };

  if (cards != null) {
    return (
      <>
        <div className="grid grid-cols-3 gap-1">
          {cards.map(card => {
            const imageUrl =
              card.card_faces && card.card_faces.length > 0
                ? getCardFaceImage(card.card_faces)
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
