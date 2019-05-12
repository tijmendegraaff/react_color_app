import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  },
};

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
