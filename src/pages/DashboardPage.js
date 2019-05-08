import React from 'react';
import { Link } from 'react-router-dom';

import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

const DashboardPage = () => {
  const palettes = seedColors.map(color => generatePalette(color));

  const paletteLinks = palettes.map(palette => (
    <Link key={palette.id} to={`/palette/${palette.id}`}>
      {palette.paletteName}
    </Link>
  ));

  return (
    <div>
      <p>palette list goes here</p>
      {paletteLinks}
    </div>
  );
};

export default DashboardPage;
