import React from 'react';
import Palette from '../components/Palette';

import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

const DashboardPage = () => {
  console.log(generatePalette(seedColors[2]));
  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
};

export default DashboardPage;
