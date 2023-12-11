import React from 'react';


export const MySVGImage: React.FC<React.SVGProps<SVGImageElement>> = (props) => {
  return (
    <svg width="28" height="28">
      <image {...props} />
    </svg>
  );
};




