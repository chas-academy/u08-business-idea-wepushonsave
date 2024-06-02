/* eslint-disable react/react-in-jsx-scope */
import { trefoil } from 'ldrs';

trefoil.register();

export const CustomLoader = () => {
  return (
    <l-trefoil
      size="100"
      stroke="9"
      stroke-length="0.15"
      bg-opacity="0.38"
      speed="1.4"
      color="#772DB4"></l-trefoil>
  );
};
