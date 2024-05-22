import React from 'react';
import Collapsable from './Collapsable';
import generateCollapsableContent from './generateCollapsableContent';

const FAQ_Card_rules = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Collapsable 
        titles="“Overlook short form”" 
        content={generateCollapsableContent()}
      />
      
    </div>
  );
};

export default FAQ_Card_rules;