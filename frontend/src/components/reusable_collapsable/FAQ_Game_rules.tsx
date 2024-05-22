import React from 'react';
import Collapsable from './Collapsable';
import generateCollapsableContent from './generateCollapsableContent';

const FAQ_Game_rules = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Collapsable 
        titles="“Overlook short form”" 
        content={generateCollapsableContent()}
      />
      <br/>
      <Collapsable 
        titles="Philosophy" 
        content={generateCollapsableContent()}
      />
    </div>
  );
};

export default FAQ_Game_rules;