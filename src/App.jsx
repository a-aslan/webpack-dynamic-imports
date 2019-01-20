import React from 'react';
import HelloWorld from './HelloWorld.jsx';
import DynamicMap from './DynamicMap.jsx';

export default () => {
  return (
    <div>
      <div className="container mt-5" >
        <HelloWorld />
      </div>
      <DynamicMap render />
    </div>
  );
};
