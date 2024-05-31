/* eslint-disable react/react-in-jsx-scope */
import backIcon from '../assets/arrow-ios-back.svg';
const BackButton = () => {
  return (
    <>
      <button className="back-button-container size-fit grid grid-cols-2 items-center content-center justify-items-start hover:shadow-inner hover:border-none hover:text-amber-600">
        <img className="fill-white h-5 " src={backIcon} alt="back" />
        <p>Back</p>
      </button>
    </>
  );
};

export default BackButton;
