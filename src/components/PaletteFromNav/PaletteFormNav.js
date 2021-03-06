import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from '../PaletteMetaForm';
import styles from './styles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleForm() {
    const { formShowing } = this.state;
    this.setState({ formShowing: !formShowing });
  }

  render() {
    const {
      open, classes, toggleDrawer, palettes, handleSubmit,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={styles.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <Link to="/" className={classes.link}>
              <Button variant="contained" color="secondary" className={classes.button}>
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.toggleForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            toggleForm={this.toggleForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
