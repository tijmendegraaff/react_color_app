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
      <div className="palette-list-wrapper">
        <div className="palette-list-container">
          <nav className="palette-list-nav">
            <h1>React Colors</h1>
          </nav>
          <div className="palette-list-palettes-container">
            {palettes.map(palette => (
              <MiniPalette key={palette.id} {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteList;
