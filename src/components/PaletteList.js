import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>PaletteList component</h1>
        {palettes.map(palette => (
          <MiniPalette key={palette.id} {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
