import {NavLink, Outlet} from 'react-router-dom';
import Card from '../components/card/Card';
import CardImage from '../components/CardImage';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>Hej</p>
        <div className="card-image-layout">{/* <CardImage /> */}</div>
        <nav>
          <NavLink to={'test'}>Test</NavLink> | {''}
          <NavLink to={'info'}>Info</NavLink> | {''}
          <NavLink to={'market'}>Market</NavLink> | {''}
          <NavLink to={'legalities'}>Legalities</NavLink>
        </nav>

        <div className="card-info-layout">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CardLayout;
