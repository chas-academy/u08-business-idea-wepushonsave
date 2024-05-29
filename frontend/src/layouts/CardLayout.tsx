/* eslint-disable react/react-in-jsx-scope */

import CardFooter from '../components/card/CardFooter';
import CardInfo from '../components/card/CardInfo';
import {useState} from 'react';
import CardMarket from '../components/card/CardMarket';
import CardLegalities from '../components/card/CardLegalities';
import {ICard} from '../components/card/CardsArray';
import CardImage from '../components/CardImage';

export interface CardLayoutProps {
  card: ICard;
  onClose: () => void;
}

const CardLayout: React.FC<CardLayoutProps> = ({card, onClose}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    if (activeTab === dropdownName) {
      setActiveTab(null);
    } else {
      setActiveTab(dropdownName);
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'info':
        return <CardInfo card={card} />;
      case 'market':
        return <CardMarket card={card} />;
      case 'legalities':
        return <CardLegalities card={card} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="card-layout">
        <CardImage card={card} onClose={onClose} />

        <section className="card-layout-footer relative ml-4 mr-4 grid grid-cols-2 justify-items-center ">
          <CardFooter />
        </section>

        <nav className="card-layout-nav grid grid-cols-3 bg-inactive-card-btn-gradient">
          <button
            onClick={() => toggleDropdown('info')}
            className={
              activeTab === 'info'
                ? 'card-details-active'
                : 'card-details-not-active'
            }>
            Info
          </button>
          <button
            onClick={() => toggleDropdown('market')}
            className={
              activeTab === 'market'
                ? 'card-details-active'
                : 'card-details-not-active'
            }>
            Market
          </button>
          <button
            onClick={() => toggleDropdown('legalities')}
            className={
              activeTab === 'legalities'
                ? 'card-details-active'
                : 'card-details-not-active'
            }>
            Legalities
          </button>
        </nav>
        {activeTab && <>{renderActiveTab()}</>}
      </div>
    </>
  );
};

export default CardLayout;
