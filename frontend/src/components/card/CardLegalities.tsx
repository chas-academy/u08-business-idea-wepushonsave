import React, {PropsWithChildren, ReactElement} from 'react';

type Legalities = {
  [key: string]: string;
};
type CardProps = {
  legalities: Legalities;
};
//FIXME See if there is any other data-type we can use for an unknown value
/* eslint-disable @typescript-eslint/no-explicit-any */
const CardLegalities = ({
  legalities,
}: PropsWithChildren<CardProps>): ReactElement => {
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const legalityEntries = Object.entries(legalities);
  return (
    <>
      <div>
        {legalityEntries.map(([format, status], index) => (
          <div key={index}>
            <strong>{format}:</strong> {status}
          </div>
        ))}
        <p>Card Legalities</p>
      </div>
    </>
  );
};
export default CardLegalities;
