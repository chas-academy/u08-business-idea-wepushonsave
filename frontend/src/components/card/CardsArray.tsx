import {redirect, useLoaderData, useNavigate} from 'react-router-dom';
import {singleCardLoader} from '../../utils/singleCardLoader';

/**
 * @IAPIResponse
 *  | @data : [ x { card-objects } ]
 *    | @ICard : { key - value }

 */

// Defines the structure of image_uris
interface IImageUris {
  border_crop: string;
}

// Defines the structure of each card
interface ICard {
  name: string;
  id: string;
  image_uris: IImageUris;
}

// Defines the structure for the API response
interface IAPIResponse {
  data: ICard[];
}

const CardsArray: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  if (cards !== null) {
    return (
      <>
        <h1 className=" text-cyan-50">CardsArray.tsx</h1>
        <div className="grid grid-cols-3 gap-1">
          {cards.map((value, index) => (
            <div key={index}>
              <img
                onClick={() => getCardId(value.id)}
                src={value.image_uris.border_crop}
                alt={value.name + 'card image'}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default CardsArray;
