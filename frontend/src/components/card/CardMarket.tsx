import React, {PropsWithChildren, ReactElement} from 'react';

type Prices = {
  [key: string]: string;
};

type CardProps = {
  prices: Prices;
};

const CardMarket = ({prices}: PropsWithChildren<CardProps>): ReactElement => {
  const priceEntries = Object.entries(prices);

  return (
    <>
      <h1>Card Market</h1>
      <div>
        {priceEntries.map(([currency, amount], index) => (
          <div key={index}>
            <strong>{currency}:</strong> {amount}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMarket;
