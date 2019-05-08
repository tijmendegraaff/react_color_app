import React from 'react';

const MiniPalette = (props) => {
  console.log(props);
  const { paletteName, emoji } = props;
  return (
    <div className="mini-palette-container">
      <div className="mini-palette-colors" />
      <h5 className="mini-palette-title">
        {paletteName}
        <span className="mini-palette-emoji">{emoji}</span>
      </h5>
    </div>
  );
};

export default MiniPalette;
