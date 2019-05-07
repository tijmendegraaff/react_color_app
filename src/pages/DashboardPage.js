import React from 'react';
import Palette from '../components/palette';

import seedColors from '../constants/seedColors';

const DashboardPage = () => (
  <div>
    <p>This is from the dashboard page</p>
    <Palette {...seedColors[5]} />
  </div>
);

export default DashboardPage;
