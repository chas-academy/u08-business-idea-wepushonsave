import {useLoaderData} from 'react-router-dom';

// types

const CardTestLegalities = () => {
  const cardData: any = useLoaderData();
  const cardEntries = Object.entries(cardData);
  console.log(cardEntries);

  return (
    <>
      <div>
        {cardEntries.map((data: any, index) => (
          <>
            <div className="test-layout">
              <p key={index}>{data.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CardTestLegalities;
