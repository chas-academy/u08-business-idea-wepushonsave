import plusButton from '../assets/plus.svg';

const CardPlusButton = () => {
  return (
    <>
      {/* hover:shadow-plum hover:bg-mint/60 */}
      {/* hover:border-white */}
      <div className="card-plus-button-container w-full min-h-12 grid grid-cols-1 justify-items-end content-center">
        <button className="plus-button-circle rounded-full size-10 bg-btn-gradient shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60">
          <img src={plusButton} alt="add-button" />
        </button>
      </div>
    </>
  );
};

export default CardPlusButton;
