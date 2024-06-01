/* eslint-disable react/react-in-jsx-scope */
/*import {useLoaderData} from 'react-router-dom';
import BackButton from '../../components/BackButton';
import CardPlusButton from '../../components/CardPlusButton';
import SearchForm from '../../components/search/SearchForm';
import SearchResults from '../../components/search/SearchResults';

const DeckBuilder: React.FC = () => {
  const data: any = useLoaderData();
  console.log(data);

  return (
    <>
      <div className="deck-builder-container m-2 text-white">
        <div className="deck-builder-back-button-container  size-fit">
          <BackButton />
        </div>
        <div className="deck-builder-name-container size-fit m-4">
          <h1 className="deck-builder-name text-2xl ">My awesome Deck</h1>
        </div>
        <section className="deck-builder-commander-card-section grid grid-cols-2">
          <div className="deck-builder-commander-container">
            <p className="text-center bg-transparent">Commander</p>
            <div className="deck-builder-commander-image-container overflow-hidden relative flex justify-center items-center shadow-lg shadow-blue-400">
              <div className="deck-builder-commander-btn  absolute z-10 w-16">
                <CardPlusButton />
              </div>
              <img
                className="rounded-xl blur-sm"
                src={data.image_uris.border_crop}
                alt=""
              />
            </div>
          </div>
          <div className="deck-builder-cards-added ">
            <p className=" text-center">Added cards</p>

            <section className="added-card-section text-nowrap grid grid-cols-7 content-center items-center bg-[#f4f4f479] rounded-l-xl ml-1 -mr-2">
              <p className="size-fit ml-1">1.</p>
              <h1 className=" -ml-2 col-span-3">Cardname</h1>
              <div className="icon-section-container grid grid-cols-6 flex-nowrap col-start-5 col-span-3 overflow-auto no-scrollbar">
                <div className="icon-container size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/W.svg"
                    alt=""
                  />
                </div>
                <div className="icon-container  size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/W.svg"
                    alt=""
                  />
                </div>
                <div className="icon-container  size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/G.svg"
                    alt=""
                  />
                </div>
                <div className="icon-container  size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/B.svg"
                    alt=""
                  />
                </div>
                <div className="icon-container  size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/B.svg"
                    alt=""
                  />
                </div>
                <div className="icon-container  size-5">
                  <img
                    src="https://svgs.scryfall.io/card-symbols/R.svg"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="commander-info-section bg-[#f4f4f479] rounded-xl p-1 mt-5">
          <div className="commander-name text-center">
            <p>
              <strong className="mr-2">Commander:</strong>Gonti, Canny
              Acquisitor
            </p>
          </div>
          <div className="cards-count-added-section grid grid-cols-4 grid-rows-2 grid-flow-col gap-1 text-xs ml-2 mr-2">
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
        <section className="search-bar-section border border-transparent bg-search-gradient rounded-xl mt-3 grid grid-cols-2">
          <div className="deck-builder-search-container m-5 col-span-2 ">
            <SearchForm />
          </div>
          <div className="owned-btn w-full h-full flex justify-center text-black bottom-2 relative ">
            <button className="p-2 bg-btn-gradient hover:bg-nav-gradient rounded-xl">
              Owned
            </button>
          </div>
          <div className="any-btn w-full h-full flex justify-center text-black bottom-2 relative">
            <button className="p-2 bg-btn-gradient hover:bg-nav-gradient rounded-xl min-w-16">
              Any
            </button>
          </div>
        </section>
      </div>
      <section className="deck-builder-search-results">
        <SearchResults />
      </section>
    </>
  );
};

export default DeckBuilder;*/