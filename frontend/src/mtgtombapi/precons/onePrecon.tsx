/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {CustomLoader} from '../customs/customLoader';
import manaSymbols from '../manaSymbols';
import {FaEuroSign} from 'react-icons/fa';
import {GiFireGem} from 'react-icons/gi';
import Capitalizer from '../customs/customCapitalizer';
import { LuSword } from 'react-icons/lu';

interface Card {
  qty: number;
  name: string;
  categories: string[];
  prices: {[key: string]: any};
  set: string;
  superTypes: string[];
  subTypes: string[];
  saltScore: number | null;
  cmc: number;
  image?: string;
  mana_cost: string;
  rarity: string;
}

const PreconDetail: React.FC = () => {
  const {name} = useParams<{name: string}>();
  const [precon, setPrecon] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<{[key: string]: boolean}>(
    {}
  );

  const fetchPrecon = async (name: string) => {
    setError(null);
    try {
      const response = await fetch(
        `https://MTGTombAPI.onrender.com/api/fullprecon/${encodeURIComponent(name)}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();

      const cardNames = result.map((card: Card) => card.name);

      const cardDetailsResponse = await fetch(
        'https://mtgtombapi.onrender.com/api/cards/by-names',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({names: cardNames}),
        }
      );

      if (!cardDetailsResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const cardDetails = await cardDetailsResponse.json();

      const updatedPrecon = result.map((card: Card) => {
        const cardDetail = cardDetails.find(
          (detail: Card) => detail.name === card.name
        );
        return {
          ...card,
          image: cardDetail?.image_uris?.border_crop,
          mana_cost: cardDetail?.mana_cost,
          prices: cardDetail?.prices,
          rarity: cardDetail?.rarity,
        };
      });

      updatedPrecon.sort((a: any, b: any) => {
        const categoryA = a.categories.includes('Commander') ? 0 : 1;
        const categoryB = b.categories.includes('Commander') ? 0 : 1;
        return categoryA - categoryB;
      });

      setPrecon(updatedPrecon);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      fetchPrecon(name);
    }
  }, [name]);

  const getRarityClass = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'common':
        return 'fill-common';
      case 'uncommon':
        return 'fill-uncommon';
      case 'rare':
        return 'fill-rare';
      case 'mythic':
        return 'fill-mythic';
      default:
        return '';
    }
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  if (loading) {
    return (
      <div className="w-full mt-80 flex justify-center content-center">
        <CustomLoader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!precon.length) {
    return <div>Preconstructed deck not found</div>;
  }

  const groupedByCategory = precon.reduce(
    (acc: {[key: string]: Card[]}, card: Card) => {
      const category = card.categories[0] || 'Others';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(card);
      return acc;
    },
    {}
  );

  return (
    <div className='max-w-[600px] text-silverpine h-full'>
      {Object.entries(groupedByCategory).map(([category, cards]) => (
        <div key={category}>
          {category === 'Commander' ? (
            <div>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-lg bg-custom-purple-800">
                  <p className="text-2xl mb-2">
                    <strong>Commander</strong>
                  </p>
                  <div className='grid grid-cols-2'>
                  <div>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="rounded-lg h-56"
                    />
                </div>
                <div>
                  <div className="grid grid-cols-4 gap-x-2 text-center">
                    <p className="font-semibold text-green-200">Normal</p>
                    <p className="flex flex-row items-center">
                      <FaEuroSign /> {card.prices.eur || 'N/A'}
                    </p>
                    <p className="font-semibold text-[#f0ae58]">Foil</p>
                    <p className="flex flex-row items-center">
                      <FaEuroSign /> {card.prices.eur_foil || 'N/A'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="grid grid-cols-10 gap-1 my-2 w-60">
                      {card.mana_cost
                        .split('}{')
                        .map((mana: string, index: number) => {
                          const formattedMana = `{${mana.replace(/[{}]/g, '')}}`;
                          const matchedSymbol = manaSymbols.find(
                            symbol => symbol.symbol === formattedMana
                          );
                          return matchedSymbol ? (
                            <img
                              key={index}
                              src={matchedSymbol.imageUrl}
                              alt={matchedSymbol.description}
                              title={matchedSymbol.description}
                              className="h-6 w-6"
                            />
                          ) : null;
                        })}
                    </div>
                    <p className="flex flex-row items-center justify-end">
                      <strong>Rarity: </strong>
                      <GiFireGem
                        size={32}
                        className={getRarityClass(card.rarity)}
                      />{' '}
                      <Capitalizer text={card.rarity} />
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>
                      <strong>CMC:</strong> {card.cmc}
                    </p>
                    <p className="flex flex-row items-center justify-end">
                      <strong>Salt Score:</strong>{' '}
                      {card.saltScore !== null ? card.saltScore : 'N/A'}
                    </p>
                  </div>
                </div>
                </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div
                className="bg-custom-purple-800 rounded-lg flex flex-col items-center w-[382px] p-2 m-4 cursor-pointer"
                onClick={() => toggleDropdown(category)}>
                <div className="grid grid-cols-2 w-full justify-items-center">
                  <h3 className="font-bold text-2xl mb-2 text-left w-full">
                    {category}
                  </h3>
                  <div
                    className={`transition-transform duration-300 ${openDropdown[category] ? 'rotate-180' : ''}`}>
                    <LuSword size={32} />
                  </div>
                </div>
              </div>
              <div
                className={`transition-max-height duration-300 overflow-x-auto shadow-inner snap-x snap-mandatory no-scrollbar ${openDropdown[category] ? 'max-w-[350px]' : 'max-h-0'}`}>
                <div className='pb-4 px-4 flex flex-row'>
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 rounded-lg bg-custom-purple-800 snap-start flex-shrink-0 mx-2 top-0 w-80">
                      <p className="text-2xl mb-2">
                        <strong>Qty:</strong> {card.qty}
                      </p>
                      <div>
                        <img
                          src={card.image}
                          alt={card.name}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-x-2 text-center">
                        <p className="font-semibold text-green-200">Normal</p>
                        <p className="flex flex-row items-center">
                          <FaEuroSign /> {card.prices.eur || 'N/A'}
                        </p>
                        <p className="font-semibold text-[#f0ae58]">Foil</p>
                        <p className="flex flex-row items-center">
                          <FaEuroSign /> {card.prices.eur_foil || 'N/A'}
                        </p>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="grid grid-cols-10 gap-1 my-2 w-60">
                          {card.mana_cost
                            .split('}{')
                            .map((mana: string, index: number) => {
                              const formattedMana = `{${mana.replace(/[{}]/g, '')}}`;
                              const matchedSymbol = manaSymbols.find(
                                symbol => symbol.symbol === formattedMana
                              );
                              return matchedSymbol ? (
                                <img
                                  key={index}
                                  src={matchedSymbol.imageUrl}
                                  alt={matchedSymbol.description}
                                  title={matchedSymbol.description}
                                  className="h-6 w-6"
                                />
                              ) : null;
                            })}
                        </div>
                        <p className="flex flex-row items-center justify-end">
                          <strong>Rarity: </strong>
                          <GiFireGem
                            size={32}
                            className={getRarityClass(card.rarity)}
                          />{' '}
                          <Capitalizer text={card.rarity} />
                        </p>
                      </div>
                      <div className="grid grid-cols-2">
                        <p>
                          <strong>CMC:</strong> {card.cmc}
                        </p>
                        <p className="flex flex-row items-center justify-end">
                          <strong>Salt Score:</strong>{' '}
                          {card.saltScore !== null ? card.saltScore : 'N/A'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreconDetail;
