/* eslint-disable react/react-in-jsx-scope */
function Capitalizer({ text }:any) {
  const capitalizeFirstLetter = (string:any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return <>{capitalizeFirstLetter(text)}</>;
}

export default Capitalizer;
