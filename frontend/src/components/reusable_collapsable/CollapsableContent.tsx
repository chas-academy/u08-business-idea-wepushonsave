/* eslint-disable react/react-in-jsx-scope */

interface CollapsableContentProps {
  title: string;
  items: string[];
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