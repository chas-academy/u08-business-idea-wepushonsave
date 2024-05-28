/* eslint-disable react/react-in-jsx-scope */


import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardLegalities = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const cardLegalities = convertObjectToArray(cardData.legalities);

  return (
    <>

      <div className="grid grid-cols-2 bg-[#322929] gap-1">
        {cardLegalities.map(({key, value}, index) => (
          <div key={index} className="border border-black m-1 ">
            <p>

              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {typeof value === 'object' ? value.join(', ') : value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardLegalities;
