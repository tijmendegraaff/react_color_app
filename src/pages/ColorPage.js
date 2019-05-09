import React from 'react';
import SingleColorPalette from '../components/SingleColorPalette';

import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

const ColorPage = (props) => {
  const {
    match: {
      params: { colorId },
    },
  } = props;
  return (
    <div>
      <SingleColorPalette
        colorId={colorId}
        palette={generatePalette(
          seedColors.find(palette => palette.id === props.match.params.paletteId),
        )}
      />
    </div>
  );
};
export default ColorPage;
