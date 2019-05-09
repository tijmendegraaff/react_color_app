import React from 'react';

const MiniPalette = ({
  paletteName, emoji, colors, handleClick,
}) => {
  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className="mini-palette-color-box"
      style={{ backgroundColor: color.color }}
    />
  ));
  return (
    <div
      className="mini-palette-container"
      onClick={handleClick}
      role="link"
      tabIndex="0"
      onKeyDown={handleClick}
    >
      <div className="mini-palette-colors">{miniColorBoxes}</div>
      <h5 className="mini-palette-title">
        {paletteName}
        <span className="mini-palette-emoji">{emoji}</span>
      </h5>
    </div>
  );
};

export default MiniPalette;
