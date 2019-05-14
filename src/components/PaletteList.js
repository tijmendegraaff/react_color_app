import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MiniPalette from './MiniPalette/MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.navigateToPalette = this.navigateToPalette.bind(this);
  }

  navigateToPalette(id) {
    const {
      history: { push },
    } = this.props;
    push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;
    return (
      <div className="palette-list-wrapper">
        <div className="palette-list-container">
          <nav className="palette-list-nav">
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className="palette-list-palettes-container">
            {palettes.map(palette => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => this.navigateToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PaletteList);
