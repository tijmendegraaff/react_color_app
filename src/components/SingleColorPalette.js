import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
    console.log(this._shades);
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
    const ColorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color.hex} showLink={false} />
    ));
    return (
      <div className="palette">
        <h1>Single Color Palette</h1>
        <div className="palette-colors">{ColorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
