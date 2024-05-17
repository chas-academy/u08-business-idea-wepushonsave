import {useEffect, useState} from 'react';

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const Card = () => {
  const [card, setCard]: any = useState();

  const getCard = async () => {
    const cardID = '56ebc372-aabd-4174-a943-c7bf59e5028d';
    const url = `https://api.scryfall.com/cards/${cardID}`;
    const response = await fetch(url);
    const result = await response.json();
    setCard(result);
    await delay(100);
    console.log(card);
    await delay(2000);
    console.log(card);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <main className="border border-red-600 h-screen ">
        {card && (
          <div className="border border-black ">
            <img src={card.image_uris.normal} alt="" />
            <p>{card.artist}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Card;
