import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';

const DraggableColorBox = SortableElement(({
  color, classes, name, deleteColor,
}) => (
  <div style={{ backgroundColor: color }} className={classes.root}>
    <div className={classes.boxContent}>
      <span>{name}</span>
      <span>
        <DeleteIcon className={classes.deleteIcon} onClick={() => deleteColor(name)} />
      </span>
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);
