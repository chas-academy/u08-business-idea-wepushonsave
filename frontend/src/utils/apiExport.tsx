/* eslint-disable react/react-in-jsx-scope */

import getIconApi from '../components/reusable_collapsable/iconApi';

export const manaCostRe = (manaCost: string) => {
  return getIconApi(manaCost).map((url: string, index: number) => (
    <div key={index} className="h-4 w-4 text-nowrap flex flex-row">
      <img src={url} alt={`mana Symbol ${index}`} className="text-nowrap" />
    </div>
  ));
};
