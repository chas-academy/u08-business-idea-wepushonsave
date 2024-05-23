import {NavLink, Outlet} from 'react-router-dom';
import CardImage from '../components/CardImage';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>CardLayout</p>
        <div className="cards-array-layout"></div>
        <CardImage />

        <nav className="border border-black flex justify-evenly bg-[#4a54ab]">
          <NavLink className={'text-xl'} to={'info'}>
            Info
          </NavLink>{' '}
          | {''}
          <NavLink className={'text-xl'} to={'market'}>
            Market
          </NavLink>{' '}
          | {''}
          <NavLink className={'text-xl'} to={'legalities'}>
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
