import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { colors } = this.props;
    const colorBoxes = colors.map(color => <ColorBox background={color.color} name={color.name} />);
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;
