import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from '../MiniPalette/MiniPalette';
import styles from './styles';

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
    const { palettes, deletePalette, classes } = this.props;
    return (
      <div className={classes.paletteListWrapper}>
        <div className={classes.paletteListContainer}>
          <nav className={classes.paletteListNav}>
            <h1 className={classes.header}>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.paletteListPalettesContainer}>
            {palettes.map(palette => (
              <MiniPalette
                deletePalette={deletePalette}
                key={palette.id}
                id={palette.id}
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

export default withStyles(styles)(PaletteList);
