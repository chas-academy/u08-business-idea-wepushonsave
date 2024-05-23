import CollapsableContent from './CollapsableContent';

interface CollapsibleSection {
  title: string;
  items: string[];
}

const generateCollapsableContent = (sections: CollapsibleSection[]) => {
  return (
    <>
      {sections.map(
        (
          section,
          index //uprepar varje sections array med map function, key hjälper react att updatera dom. inuti dem skapade divarna skapas collapsablesection och content med title och items
        ) => (
          <div key={index} id={`collapsible-section-${index}`}>
            <CollapsableContent title={section.title} items={section.items} />
          </div>
        )
      )}
    </>
  );
};

export default generateCollapsableContent;
