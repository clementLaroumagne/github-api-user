import React from 'react';

const SvgDisplay = ({ svgFileName }) => {
  const svgPath = `${svgFileName}.svg`;

  return (
    <div>
      <svg>
        <use xlinkHref={svgPath} />
      </svg>
    </div>
  );
};

export default SvgDisplay;
