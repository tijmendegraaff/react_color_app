import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Footer = ({ palette, classes }) => {
  const { name, emoji } = palette;
  return (
    <footer className={classes.paletteFooter}>
      {name}
      {' '}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(Footer);
