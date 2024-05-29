/* eslint-disable react/react-in-jsx-scope */
import land from '../../assets/land.svg';
import creature from '../../assets/creature.svg';
import enchantment from '../../assets/Enchantment.svg';
import artifact from '../../assets/artifact.svg';
import sorcery from '../../assets/sorcery.svg';
import instant from '../../assets/instant.svg';
import planeswalker from '../../assets/paneswalker.svg';

interface CollapsableContentProps {
  title: string;
  items: string[];
  image?: string
}
//This component expects two pieces of information: a title, which is like a heading, and items, which are like bullet points or paragraphs.
const CollapsableContent = ({title, items}: CollapsableContentProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="list-disc ml-6 mt-2">
        {/*displaying through mapping funcktion and the if statements give styling depending on the statements */}
        {items.map((item, index) => {
          if (item.startsWith('-')) {
            return (
              <h3 key={index} className="font-bold text-lg">
                {item.substring(1)}
              </h3>
            );
          } else if (item.startsWith('*')) {
            return (
              <li key={index} className="mt-2 ml-2">
                {item.substring(1)}
              </li>
            );
          } else if (item.startsWith('_')) {
            return <br key={index} />;
          } else if (item.startsWith('imgLand')) {
            return <img key={index} src={land} alt="Land rules"></img>;
          } else if (item.startsWith('imgCreature')) {
            return <img key={index} src={creature} alt="Creature rules"></img>;
          } else if (item.startsWith('imgEnchantment')) {
            return (
              <img key={index} src={enchantment} alt="Enchantment rules"></img>
            );
          } else if (item.startsWith('imgArtifact')) {
            return <img key={index} src={artifact} alt="Artifact rules"></img>;
          } else if (item.startsWith('imgSorcery')) {
            return <img key={index} src={sorcery} alt="Sorcery rules"></img>;
          } else if (item.startsWith('imgInstant')) {
            return <img key={index} src={instant} alt="Instant rules"></img>;
          } else if (item.startsWith('imgPlaneswalker')) {
            return (
              <img
                key={index}
                src={planeswalker}
                alt="Planeswalker rules"></img>
            );
          }
          return (
            <li key={index} className="mt-2">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CollapsableContent;
