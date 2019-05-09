import React, { Component } from 'react';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
  }

  gatherShades = (palette, colorFilterBy) => {
    let shades = [];
    const allColors = palette.colors;
    Object.keys(allColors).forEach((key) => {
      shades = shades.concat(allColors[key].filter(color => color.id === colorFilterBy));
    });
    return shades.slice(1);
  };

  render() {
    return (
      <div>
        <h1>Single Color Palette</h1>
      </div>
    );
  }
}

export default SingleColorPalette;
