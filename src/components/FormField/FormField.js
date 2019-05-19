import React from 'react';
import { withStyles } from '@material-ui/styles';
import splitOnUppercase from '../../helpers/textHelpers';
import styles from './styles';

const FormField = ({
  classes, name, onChange, type, value,
}) => (
  <div className={classes.inputContainer}>
    <p className={classes.formLabel}>{splitOnUppercase(name)}</p>
    <input
      type={type}
      name={name}
      className={classes.formInput}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default withStyles(styles)(FormField);
