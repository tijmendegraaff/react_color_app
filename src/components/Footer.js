import React from 'react';

const Footer = ({ palette }) => {
  const { paletteName, emoji } = palette;
  return (
    <footer className="palette-footer">
      {paletteName}
      {' '}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default Footer;
