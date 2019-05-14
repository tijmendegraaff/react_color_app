import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';
import Footer from '../Footer/Footer';
import styles from './styles';

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
    const { palette, classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={palette.id}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showAllColors
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <Footer palette={palette} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
