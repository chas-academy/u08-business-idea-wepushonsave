import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {singleCardLoader} from '../../utils/singleCardLoader';
import {ICard} from '../../utils/ScryfallInterfaces';
// import {manaCostRe} from '../';
import CardLayout from '../../layouts/CardLayout';

interface IListData {
  title: string;
  cardIds: string[];
}

const CardDisplay: React.FC = () => {
  const {listId} = useParams<{listId: string}>();
  const [listData, setListData] = useState<IListData | null>(null);
  const [cards, setCards] = useState<ICard[]>([]);
  const [isGridView, setIsGridView] = useState(true);
  const [activeCard, setActiveCard] = useState<ICard | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/lists/${listId}`,
          {
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch list data');
        }

        const data: IListData = await response.json();
        setListData(data);

        const cardDetailsPromises = data.cardIds.map(id =>
          singleCardLoader({params: {id}})
        );
        const cardDetails = await Promise.all(cardDetailsPromises);
        setCards(cardDetails);
        console.log('Fetched card details:', cardDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchListData();
  }, [listId]);

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  const extractPrimaryType = (typeLine: string) => {
    if (typeLine) {
      return typeLine.split(' ')[0];
    }
    return 'Unknown';
  };

  const sortedCards = [...cards].sort((a, b) => {
    const primaryTypeA = extractPrimaryType(a.type_line);
    const primaryTypeB = extractPrimaryType(b.type_line);
    return primaryTypeA.localeCompare(primaryTypeB);
  });

  const getTypeCounts = () => {
    const counts: {[type: string]: number} = {};
    sortedCards.forEach(card => {
      const primaryType = extractPrimaryType(card.type_line);
      counts[primaryType] = (counts[primaryType] || 0) + 1;
    });
    return counts;
  };

  const typeCounts = getTypeCounts();

  const handleClickCard = (card: ICard) => {
    setActiveCard(card);
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
    setActiveCard(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="">
        <h1 className="mt-5 text-white text-2xl font-inter text-center">
          {listData ? listData.title : 'Loading...'}
        </h1>

        <dialog
          ref={dialogRef}
          className="size-9/12 md:h-9/10 md:w-1/3 bg-transparent backdrop:bg-black/75 shadow-xl no-scrollbar flex h-min overflow-auto">
          {activeCard && (
            <div className="m-2 bg-[#17140D] text-white rounded-t-xl relative">
              <CardLayout
                card={activeCard}
                onClose={handleCloseDialog}
                setActiveCard={setActiveCard}
                addCardToDeck={function (_card: ICard): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          )}
        </dialog>

        <div className="flex justify-start mb-4">
          <button
            onClick={handleViewToggle}
            className="ml-4 px-1 pt-1 pb-1 rounded-xl bg-periwinkle text-white">
            {isGridView ? 'List view' : 'Grid view'}
          </button>
        </div>
        {isGridView ? (
          <div className="grid grid-cols-3 gap-1">
            {sortedCards.map(card => (
              <div key={card.id} onClick={() => handleClickCard(card)}>
                {card.image_uris && card.image_uris.border_crop ? (
                  <img
                    src={card.image_uris.border_crop}
                    alt={`${card.name} card image`}
                    className="cursor-pointer"
                  />
                ) : (
                  <div className="placeholder-image">
                    {/* Optionally, add a placeholder image or text here */}
                    <span className="text-white">No Image</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {Array.from(
              new Set(
                sortedCards.map(card => extractPrimaryType(card.type_line))
              )
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
                      className="mb-1 ml-5 mr-5 rounded cursor-pointer flex justify-between bg-site-gradient"
                      onClick={() => handleClickCard(card)}>
                      <span className="pl-2 text-gray-200 text-sm">
                        {card.name}
                      </span>
                      {/* {card.mana_cost && (
                        <div className="ml-2">{manaCostRe(card.mana_cost)}</div>
                      )} */}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardDisplay;
