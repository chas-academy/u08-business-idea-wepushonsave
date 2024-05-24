import { NavLink, Outlet } from 'react-router-dom';
import CardImage from '../components/CardImage';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>CardLayout</p>
        <div className="cards-array-layout"></div>
        <CardImage />

        <nav className="grid grid-cols-3">

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'card-details-active card-info'
                : 'card-details-not-active'
            }
            to={'info'}>
            Info
          </NavLink>{' '}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'card-details-active card-market'
                : 'card-details-not-active'
            }
            to={'market'}>
            Market
          </NavLink>{' '}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'card-details-active card-legalities'
                : 'card-details-not-active'
            }
            to={'legalities'}>
            Legalities
          </NavLink>
        </nav>
        <div className="card-info-layout">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CardLayout;
