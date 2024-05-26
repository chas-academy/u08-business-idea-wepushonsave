/* eslint-disable react/react-in-jsx-scope */

import {NavLink, Outlet} from 'react-router-dom';
import CardImage from '../components/CardImage';
import CardFooter from '../components/card/CardFooter';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <section className="card-layout-image w-full h-full grid grid-cols-1 justify-items-center">
          <CardImage />
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
