import {useLoaderData} from 'react-router-dom';

const CardImage = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const cardImage = cardData.image_uris.border_crop;

  return (
    <>
      <div>
        <img src={cardImage} alt="" />
      </div>
    </>
  );
};

export default CardImage;
