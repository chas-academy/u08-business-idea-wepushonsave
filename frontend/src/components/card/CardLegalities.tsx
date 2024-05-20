import React, {PropsWithChildren, ReactElement} from 'react';

/**
 * Type Definition
 *
 * @Legalities = Object
 *  key: string
 *  value: string
 */
type Legalities = {
  [key: string]: string;
};

/**
 * From Card.tsx
 * @CardProps = card.legalities
 */
type CardProps = {
  legalities: Legalities;
};

const CardLegalities = ({
  legalities,
}: PropsWithChildren<CardProps>): ReactElement => {
  /**
   * @Object entries
   * converts object > array
   */
  const legalityEntries = Object.entries(legalities);

  return (
    <>
      <h1>Card Legalities</h1>
      <div>
        {legalityEntries.map(([format, status], index) => (
          <div key={index}>
            <strong>{format}:</strong> {status}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardLegalities;
