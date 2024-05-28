/* eslint-disable react/react-in-jsx-scope */
/**
 * SearchResults
 * when searching for @card @set @list @commander
 * Display the resaults after a given search
 */

import {useLoaderData} from 'react-router-dom';
import {IAPIResponse} from '../card/CardsArray';
import {getImageFromCardFaces} from '../../utils/getImageFromCardFaces';
import {useEffect, useRef, useState} from 'react';
import {delay} from '../../utils/setApiDelay';
import CardLayout from '../../layouts/CardLayout';
import x from '../../assets/x-letter.svg';

const SearchResults: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeCard, setActiveCard] = useState<any>();
  console.log('ActiveCard', activeCard);

  useEffect(() => {
    delay(2000);
    if (!activeCard) return;
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
    dialogRef.current?.addEventListener('close', closeModal);

    return () => {
      dialogRef.current?.removeEventListener('close', closeModal);
      document.body.style.overflow = '';
    };
  }, [activeCard]);

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveCard(undefined);
    document.body.style.overflow = '';
  };

  if (cards != null) {
    return (
      <>
        <dialog
          ref={dialogRef}
          className="bg-transparent backdrop:bg-black/75 overflow-visible">
          {activeCard && (
            <>
              <div className="card-image-container border border-red-600 z-0 flex justify-center items-center">
                <img
                  className="size-9/12 shadow-xl"
                  /* onClick={() => getCardId(card.id)} */
                  src={
                    activeCard.card_faces && activeCard.card_faces.length > 0
                      ? getImageFromCardFaces(activeCard.card_faces)
                      : activeCard.image_uris?.border_crop
                  }
                  alt={`${activeCard.name} card image`}
                />
                <button
                  className="search-result-btn z-1 flex items-center justify-center rounded-full bg-neutral-300 w-5 h-5 absolute -top-2 right-7"
                  onClick={() => closeModal()}>
                  <img
                    className=" overflow-visible w-4 h-4 text-neutral-700"
                    src={x}
                    alt=""
                  />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="">
                <CardLayout />
              </div>
            </>
          )}
        </dialog>

        <div className="grid grid-cols-3 sm:grid-cols-8 gap-4 m-4 relative sm:top-16">
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
              <div
                key={card.id}
                className="search-result-img-container border border-red-600 flex justify-center">
                {imageUrl ? (
                  <button onClick={() => setActiveCard(card)}>
                    <img
                      /* onClick={() => getCardId(card.id)} */
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

    return null;
  }
};

export default SearchResults;
