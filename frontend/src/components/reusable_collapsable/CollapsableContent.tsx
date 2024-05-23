interface CollapsableContentProps {
  title: string;
  items: string[];
}

const CollapsableContent: React.FC<CollapsableContentProps> = ({
  title,
  items,
}) => {
  return (
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="list-disc ml-6 mt-2 ">
      {items.map((item, index) => {     //mapar ut texten i generateCollapsableContent, allt med ett - framför kommer få en annan styling
          if (item.startsWith('-')) {
            return (
              <h3 key={index} className="font-bold text-lg">
                {item.substring(1)}
              </h3> //- i början gör den bold
            );
          } if (item.startsWith('*')) { 
            return(
            <li key={index} className="mt-2 ml-2">{item.substring(1)}</li>//* gör att den blir en nested li
        )
          } if (item.startsWith('_')) { 
            return(
            <br />
        )
          }
          else {
            return (
              <li key={index} className="mt-2">
                {item}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default CollapsableContent;
