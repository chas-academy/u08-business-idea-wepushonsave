import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [card, setCard] = useState(null);
  const getCard = async () => {
    const url = 'http://localhost:3000/card';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setCard(result);
    console.log(card);
    return card;
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      {card && (
        <div>
          <h1>Result:</h1>
          <p>{card}</p>
        </div>
      )}
    </>
  );
}

export default App;
