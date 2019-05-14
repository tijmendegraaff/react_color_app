import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const { deletePalette, id } = this.props;
    e.stopPropagation();
    deletePalette(id);
  }

  render() {
    const {
      paletteName, emoji, colors, handleClick, classes,
    } = this.props;

    const miniColorBoxes = colors.map(color => (
      <div
        key={color.name}
        className={classes.miniPaletteColorBox}
        style={{ backgroundColor: color.color }}
      />
    ));

    return (
      <div
        className={classes.miniPaletteContainer}
        onClick={handleClick}
        role="link"
        tabIndex="0"
        onKeyDown={handleClick}
      >
        <DeleteIcon className={classes.deleteIcon} onClick={this.handleDelete} />
        <div className={classes.miniPaletteColors}>{miniColorBoxes}</div>
        <h5 className={classes.miniPaletteTitle}>
          {paletteName}
          <span className={classes.miniPaletteEmoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
