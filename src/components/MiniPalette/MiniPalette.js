import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MiniPalette = ({
  paletteName, emoji, colors, handleClick, classes,
}) => {
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
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.miniPaletteColors}>{miniColorBoxes}</div>
      <h5 className={classes.miniPaletteTitle}>
        {paletteName}
        <span className={classes.miniPaletteEmoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
