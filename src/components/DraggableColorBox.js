import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
  },
};

const DraggableColorBox = ({ color, classes, name }) => (
  <div style={{ backgroundColor: color }} className={classes.root}>
    {color}
    <p>{name}</p>
  </div>
);

export default withStyles(styles)(DraggableColorBox);
