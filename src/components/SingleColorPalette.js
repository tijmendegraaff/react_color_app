import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox/ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
    };
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades = (palette, colorFilterBy) => {
    let shades = [];
    const allColors = palette.colors;
    Object.keys(allColors).forEach((key) => {
      shades = shades.concat(allColors[key].filter(color => color.id === colorFilterBy));
    });
    return shades.slice(1);
  };

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { palette } = this.props;
    const ColorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className="single-color-palette palette">
        <Navbar changeFormat={this.changeFormat} showAllColors={false} />
        <div className="palette-colors">
          {ColorBoxes}
          <div className="color-box" style={{ backgroundColor: 'black' }}>
            <Link to={`/palette/${palette.id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <Footer palette={palette} />
      </div>
    );
  }
}

export default SingleColorPalette;
