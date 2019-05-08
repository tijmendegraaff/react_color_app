import React from 'react';
import PaletteList from '../components/PaletteList';

import seedColors from '../constants/seedColors';
// import generatePalette from '../helpers/colorHelpers';

const DashboardPage = () => (
  <div>
    <PaletteList palettes={seedColors} />
  </div>
);
export default DashboardPage;
