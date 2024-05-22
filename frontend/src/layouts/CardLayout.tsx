import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import CardImage from '../components/CardImage';

const CardLayout = () => {
  return (
    <>
      <div className="card-layout">
        <p>CardLayout</p>
        <div className="cards-array-layout"></div>
        <CardImage />

        <div className="card-info-layout">
          <Outlet />
        </div>

        <nav>
          <NavLink to={'info'}>Info</NavLink> | {''}
          <NavLink to={'market'}>Market</NavLink> | {''}
          <NavLink to={'legalities'}>Legalities</NavLink>
        </nav>
      </div>
    </>
  );
};

export default CardLayout;
