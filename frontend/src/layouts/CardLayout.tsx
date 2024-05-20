import {NavLink, Outlet} from 'react-router-dom';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>Hej</p>

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
