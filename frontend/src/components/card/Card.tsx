/**
 * feature
 *
 * This sub-folder to the `component` folder is used as a sub-folder to
 * the `pages` folder. See @BindersPage for details
 *
 */
import BindersPage from '../../pages/binders/BindersPage';

/**
 * Card.tsx
 *
 * @ This is the body of a single card component that contains:
 * > CardImage.tsx (NOTE: the root of this file is `components`)
 * > CardInfo.tsx
 * > CardLegality.tsx
 * > CardMarket.tsx
 */

import CardImage from '../CardImage';
import CardInfo from './CardInfo';
import CardLegality from './CardLegality';
import CardMarket from './CardMarket';

const Card = () => {
  return (
    <>
      <CardImage />
      <CardInfo />
      <CardLegality />
      <CardMarket />
    </>
  );
};

export default Card;
