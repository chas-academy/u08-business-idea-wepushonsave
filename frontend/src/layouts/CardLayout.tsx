/* eslint-disable react/react-in-jsx-scope */

import {NavLink, Outlet, useLoaderData} from 'react-router-dom';
import CardFooter from '../components/card/CardFooter';
import {getImageFromCardFaces} from '../utils/getImageFromCardFaces';

const CardLayout = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const imageUrl =
    cardData.card_faces && cardData.card_faces.length > 0
      ? getImageFromCardFaces(cardData.card_faces)
      : cardData.image_uris?.border_crop;

  return (
    <>
      <div className="card-layout">
        <section className="card-layout-image w-full h-full grid grid-cols-1 justify-items-center">
          <div className="card-image-container flex justify-center items-center size-fit">
            <img className="size-9/12 shadow-xl" src={imageUrl} alt="" />
          </div>
        </section>

        <section className=" card-layout-footer relative ml-4 mr-4 grid grid-cols-2 justify-items-center">
          <CardFooter />
        </section>

        <nav className="card-layout-nav grid grid-cols-3 bg-inactive-card-btn-gradient">
          <NavLink
            className={({isActive}) =>
              isActive
                ? 'card-details-active card-info'
                : 'card-details-not-active'
            }
            to={'info'}>
            Info
          </NavLink>{' '}
          <NavLink
            className={({isActive}) =>
              isActive
                ? 'card-details-active card-market'
                : 'card-details-not-active'
            }
            to={'market'}>
            Market
          </NavLink>{' '}
          <NavLink
            className={({isActive}) =>
              isActive
                ? 'card-details-active card-legalities'
                : 'card-details-not-active'
            }
            to={'legalities'}>
            Legalities
          </NavLink>
        </nav>
        <div className="card-layout-details">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CardLayout;
