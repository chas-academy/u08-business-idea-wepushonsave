/* eslint-disable react/react-in-jsx-scope */
import BackButton from '../../components/BackButton';
import SearchForm from '../../components/search/SearchForm';
import SearchResults from '../../components/search/SearchResults';
import {useSearch} from '../../components/search/SearchContext';
import manaSymbols from '../../mtgtombapi/manaSymbols';
import {ICard} from '../../utils/ScryfallInterfaces';

export interface IDeck {
  id: string;
  name: string;
  cards: ICard[];
}

const DeckBuilder: React.FC = () => {
  const {deck} = useSearch();

  return (
    <>
      <div className="flex justify-center sm:mt-14">
        <div className="deck-builder-container text-white max-w-2xl">
          <div className="deck-builder-back-button-container size-fit">
            <BackButton />
          </div>
          <div className="deck-builder-name-container size-fit m-4">
            <h1 className="deck-builder-name text-2xl ">my deck</h1>
          </div>
          <section className="deck-builder-commander-card-section grid grid-cols-2  h-1/2 md:h-2/3 max-h-[40vh] md:max-h-[80vh]">
            <div className="deck-builder-commander-container  m-3  h-full">
              <p className="text-center bg-transparent">Commander</p>
              <div className="deck-builder-commander-image-container overflow-hidden relative flex justify-center items-center shadow-lg shadow-blue-400">
                <div className="deck-builder-commander-btn  absolute z-10 w-16">
                  {/* <CardPlusButton /> */}
                </div>

                <img
                  className="rounded-xl"
                  src="https://cards.scryfall.io/border_crop/front/b/d/bd0d5a0c-5dec-439c-b037-9d17dda5ead3.jpg?1687551819"
                  alt="atraxa, praetors voice"
                />
              </div>
            </div>
            <div className="deck-builder-cards-added m-3 overflow-y-auto no-scrollbar ">
              <p className=" text-center">Added cards</p>
              {deck.map((card, index) => (
                <section
                  key={index}
                  className="added-card-section text-nowrap grid grid-cols-1 grid-rows-2 bg-[#f4f4f479] rounded-l-xl m-1 -mr-2 sm:mr-0 text-center">
                  <div className="name-container flex justify-start ml-1 text-sm sm:text-lg">
                    <p className="mr-1">{index + 1}.</p>
                    <h1>{card.name}</h1>
                  </div>
                  <div className="icon-section-container flex justify-start gap-px ml-1">
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
                            className="size-5"
                          />
                        ) : null;
                      })}
                  </div>
                </section>
              ))}
            </div>
          </section>
          <div className="flex justify-center">
            <section className="border commander-info-section bg-[#f4f4f479] max-w-sm rounded-xl p-1 m-5">
              <div className="commander-name text-center">
                <p>
                  <strong className="mr-2">Commander:</strong>Gonti, Canny
                  Acquisitor
                </p>
              </div>
              <div className="cards-count-added-section flex flex-wrap gap-3 justify-center text-xs m-1 mt-3">
                <p className="draw">
                  <strong className="mr-2">Draw:</strong>1
                </p>
                <p className="instants">
                  <strong className="mr-2">Instants:</strong>4
                </p>
                <p className="sorcery">
                  <strong className="mr-2">Sorcery:</strong>12
                </p>
                <p className="lands">
                  <strong className="mr-2">Lands:</strong>28
                </p>
                <p className="creatures">
                  <strong className="mr-2">Creatures:</strong>26
                </p>
                <p className="enchantments">
                  <strong className="mr-2">Enchantments:</strong>2
                </p>
                <p className="artifacts">
                  <strong className="mr-2">Artifacts:</strong>6
                </p>
              </div>
            </section>
          </div>
          <div className="flex justify-center">
            <section className="search-sectionborder-transparent bg-search-gradient rounded-xl flex justify-between items-center gap-2 max-w-xl sm:p-1">
              <SearchForm />
              <div className="search-buttons flex flex-row gap-2 justify-center items-center m-1">
                <div className="owned-btn border rounded-xl text-black h-fit ">
                  <button className="p-2 bg-btn-gradient hover:bg-nav-gradient rounded-xl">
                    Owned
                  </button>
                </div>
                <div className="any-btn border rounded-xl text-black h-fit">
                  <button className="p-2 bg-btn-gradient hover:bg-nav-gradient rounded-xl min-w-16">
                    Any
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="deck-builder-search-results">
        <SearchResults />
      </section>
    </>
  );
};

export default DeckBuilder;
