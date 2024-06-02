/* eslint-disable react/react-in-jsx-scope */
/**
 * SearchResults
 * when searching for @card @set @list @commander
 * Display the resaults after a given search
 */
import {ICard} from '../../utils/ScryfallInterfaces';
import {getImageFromCardFaces} from '../../utils/getImageFromCardFaces';
import {useEffect, useRef, useState} from 'react';
import CardLayout from '../../layouts/CardLayout';
import {useSearch} from './SearchContext';

const SearchResults: React.FC = () => {
  const {results, addCardToDeck} = useSearch();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeCard, setActiveCard] = useState<ICard | undefined>(undefined);

  useEffect(() => {
    if (!activeCard) return;
    dialogRef.current?.showModal();

    document.body.addEventListener('click', handleOnClick);
    dialogRef.current?.addEventListener('close', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeEventListener('click', handleOnClick);
      dialogRef.current?.removeEventListener('close', closeModal);
      document.body.style.overflow = '';
    };
  }, [activeCard, results]);

  /**
   * Close view
   * @param e click-events outside the card window
   */
  const handleOnClick = (e: any) => {
    if (e.target.tagName !== 'DIALOG') return;
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    if (dialogDimensions != undefined) {
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeModal();
      }
    }
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveCard(undefined);
    document.body.style.overflow = '';
  };

  if (!results || results.length === 0) return;
  console.log(results);
  return (
    <>
      <dialog
        ref={dialogRef}
        className=" size-9/12 md:h-9/10 md:w-1/3 bg-transparent backdrop:bg-black/75 shadow-xl no-scrollbar flex h-min overflow-auto">
        {activeCard && (
          <dialog
            open
            className=" m-2 bg-[#17140D] text-white rounded-t-xl relative">
            <CardLayout
              card={activeCard}
              onClose={closeModal}
              setActiveCard={setActiveCard}
              addCardToDeck={addCardToDeck}
            />
          </dialog>
        )}
      </dialog>

      <div className=" grid grid-cols-3 sm:grid-cols-8 gap-4 m-4 relative sm:top-16">
        {results.map((card: ICard) => {
          const imageUrl =
            card.card_faces && card.card_faces.length > 0
              ? getImageFromCardFaces(card.card_faces)
              : card.image_uris?.border_crop;
          const cardName =
            card.card_faces && card.card_faces.length > 0
              ? card.card_faces[0].name
              : card.name;
          return (
            <div
              key={card.id}
              className=" search-result-img-container flex justify-center">
              {imageUrl ? (
                <button onClick={() => setActiveCard(card)}>
                  <img
                    className="rounded-md"
                    src={imageUrl}
                    alt={`${cardName} card image`}
                  />
                </button>
              ) : (
                <p>No image available</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
