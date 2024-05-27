import {useState} from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';

// This is used to define the shape of the data related to image URIs for a card
interface IImageUris {
  border_crop: string;
}

interface ICard {
  name: string;
  id: string;
  type_line: string;
  mana_cost?: string;
  image_uris: IImageUris;
}

interface IAPIResponse {
  data: ICard[];
}

const CardDisplay: React.FC = () => {
  // When db will be ready, change loader in CardsDisplay's route to use database
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const navigate = useNavigate();
  const [isGridView, setIsGridView] = useState(true);

  // Function used in the view button so the user is able to choose the way to display cards (list or grid)
  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  // Function used when user click on a card to display this specific card
  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  // Function to extract the primary type (first word) from the type_line
  const extractPrimaryType = (typeLine: string) => {
    return typeLine.split(' ')[0];
  };

  // Function that sorts the cards by primary types in the list view
  const sortedCards = [...cards].sort((a, b) => {
    const primaryTypeA = extractPrimaryType(a.type_line);
    const primaryTypeB = extractPrimaryType(b.type_line);
    return primaryTypeA.localeCompare(primaryTypeB);
  });

  // This function completes sortedCards() by counting the number of cards in each primary category
  const getTypeCounts = () => {
    const counts: {[type: string]: number} = {};
    sortedCards.forEach(card => {
      const primaryType = extractPrimaryType(card.type_line);
      counts[primaryType] = (counts[primaryType] || 0) + 1;
    });
    return counts;
  };

  const typeCounts = getTypeCounts();

  return (
    <div className="bg-list-card-background">
      {/*  When db ready, insert name of the list here */}
      <h1 className="mt-5 text-white text-2xl font-inter text-center">
        All cards
      </h1>{' '}
      <div className="flex justify-start mb-4">
        <button
          onClick={handleViewToggle}
          className="ml-4 px-1 pt-1 pb-1 rounded-xl bg-periwinkle text-white">
          {isGridView ? 'List view' : 'Grid view'}
        </button>
      </div>
      {isGridView ? (
        <div className="grid grid-cols-3 gap-1">
          {cards.map(card => (
            <div key={card.id} onClick={() => getCardId(card.id)}>
              <img
                src={card.image_uris.border_crop}
                alt={`${card.name} card image`}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* List view */}
          {Array.from(
            new Set(cards.map(card => extractPrimaryType(card.type_line)))
          ).map(primaryType => (
            <div key={primaryType} className="mb-4">
              <h3 className="pl-4 mb-2 text-white">{`${primaryType}: ${typeCounts[primaryType]}`}</h3>
              {sortedCards
                .filter(
                  card => extractPrimaryType(card.type_line) === primaryType
                )
                .map(card => (
                  <div
                    key={card.id}
                    className="mb-1 ml-5 mr-5 rounded cursor-pointer flex justify-between bg-list-card-background"
                    onClick={() => getCardId(card.id)}>
                    <span className="pl-2 text-gray-200 text-sm">
                      {card.name}
                    </span>
                    {/* When Alex's functionality done, call functions here to have icons corresponding to mana_cost */}
                    {card.mana_cost && (
                      <span className="ml-2">{card.mana_cost}</span>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
