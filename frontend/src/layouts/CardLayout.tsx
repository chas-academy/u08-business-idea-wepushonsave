/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import CardFooter from '../components/card/CardFooter';
import CardInfo from '../components/card/CardInfo';
import {Dispatch, useState} from 'react';
import CardMarket from '../components/card/CardMarket';
import CardLegalities from '../components/card/CardLegalities';

import CardImage from '../components/CardImage';
import {ICard} from '../utils/ScryfallInterfaces';

export interface CardLayoutProps {
  card: ICard;
  onClose: () => void;
  setActiveCard: Dispatch<ICard>;
  addCardToDeck: (card: ICard) => void;
}

const CardLayout: React.FC<CardLayoutProps> = ({
  card,
  onClose,
  setActiveCard,
  addCardToDeck,
}) => {
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
        return <CardMarket card={card} setActiveCard={setActiveCard} />;
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

        <section className="card-layout-footer flex justify-between items-center m-px">
          <CardFooter card={card} addCardToDeck={addCardToDeck} />
        </section>

        <nav className="card-layout-nav grid grid-cols-3 bg-inactive-card-btn-gradient">
          <button
            onClick={() => toggleDropdown('info')}
            className={
              activeTab === 'info'
                ? 'card-details-active card-info'
                : 'card-details-not-active'
            }>
            Info
          </button>
          <button
            onClick={() => toggleDropdown('market')}
            className={
              activeTab === 'market'
                ? 'card-details-active card-market'
                : 'card-details-not-active'
            }>
            Market
          </button>
          <button
            onClick={() => toggleDropdown('legalities')}
            className={
              activeTab === 'legalities'
                ? 'card-details-active card-legalities'
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
