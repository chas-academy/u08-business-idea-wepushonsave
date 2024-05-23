import Collapsable from './Collapsable';
import CollapsableContent from './CollapsableContent';

const FAQ_Card_rules = () => {
  return (
    <>
    <div className="p-4 bg-gray-200 rounded-lg">
    {/* First collapsible section */}
    <Collapsable 
      titles="First Collapsible"
      content={
        <CollapsableContent
          title="First Collapsible Title"
          items={[
            "First Collapsible Item 1",
            "First Collapsible Item 2",
            "First Collapsible Item 3",
          ]}
        />
      }
    />

    {/* Second collapsible section */}
    <Collapsable 
      titles="Second Collapsible"
      content={
        <CollapsableContent
          title="Second Collapsible Title"
          items={[
            "Second Collapsible Item 1",
            "Second Collapsible Item 2",
            "Lamo",
          ]}
        />
      }
    />
  </div>
  </>
  );
};

export default FAQ_Card_rules;