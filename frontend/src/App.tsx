import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [card, setCard]: any = useState({});
  const getCard = async () => {
    const url =
      'https://api.scryfall.com/cards/56ebc372-aabd-4174-a943-c7bf59e5028d';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setCard(result);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      {card && (
        <div>
          <h1>Result:</h1>
          <img src={card.image_uris.normal} alt="" />
          <p>{card.artist}</p>
        </div>
      )}
    </>
  );
}

export default App;
