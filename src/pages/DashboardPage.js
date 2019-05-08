import React from 'react';
import Palette from '../components/Palette';

import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

const DashboardPage = () => (
  <div>
    <Palette palette={generatePalette(seedColors[2])} />
  </div>
);

export default DashboardPage;
