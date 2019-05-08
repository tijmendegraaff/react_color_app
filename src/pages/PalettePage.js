import React from 'react';
import Palette from '../components/Palette';

import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

const PalettePage = props => (
  <div>
    <Palette
      palette={generatePalette(seedColors.find(palette => palette.id === props.match.params.id))}
    />
  </div>
);

export default PalettePage;
