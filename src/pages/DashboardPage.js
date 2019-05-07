import React from 'react';
import Palette from '../components/Palette';

import seedColors from '../constants/seedColors';

const DashboardPage = () => (
  <div>
    <Palette {...seedColors[2]} />
  </div>
);

export default DashboardPage;
