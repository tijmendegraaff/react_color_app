import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { palette } = this.props;
    const { level, format } = this.state;

    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={palette.id}
        showLink
      />
    ));
    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
        <div className="palette-colors">{colorBoxes}</div>
        <Footer palette={palette} />
      </div>
    );
  }
}

export default Palette;
