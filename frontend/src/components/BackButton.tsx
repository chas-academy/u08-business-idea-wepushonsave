import backIcon from '../assets/arrow-ios-back.svg';
const BackButton = () => {
  return (
    <>
      <button className="back-button-container w-auto h-8 grid grid-cols-2 items-center content-center hover:shadow-inner hover:border-none hover:text-custom-purple-800">
        <img src={backIcon} alt="back" />
        <p>Back</p>
      </button>
    </>
  );
};

export default BackButton;
