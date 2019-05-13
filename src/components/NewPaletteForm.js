import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import arrayMove from 'array-move';
import drawerWidth from '../constants/cssConstants';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawerContainer: {
    height: '100%',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
  },
  button: {
    width: '50%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);
    const { palettes } = this.props;
    this.state = {
      open: true,
      newPaletteName: '',
      colors: palettes[0].colors,
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  addNewColor(currentColor, newColorName) {
    const { colors } = this.state;
    const newColor = { color: currentColor, name: newColorName };
    this.setState({ colors: [...colors, newColor] });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  deleteColor(colorName) {
    const { colors } = this.state;
    this.setState({
      colors: colors.filter(color => color.name !== colorName),
    });
  }

  clearColors() {
    this.setState({
      colors: [],
    });
  }

  // TODO make sure the random color is not in the state
  addRandomColor() {
    const { palettes } = this.props;
    const { colors } = this.state;
    const allColors = palettes.map(palette => palette.colors).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({
      colors: [...colors, randomColor],
    });
  }

  toggleDrawer() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  handleSubmit(palette) {
    const { savePalette, history } = this.props;
    const { colors } = this.state;
    const newPalette = {
      paletteName: palette.newPaletteName,
      emoji: palette.emoji,
      id: palette.newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors,
    };
    savePalette(newPalette);
    history.push('/');
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const {
      open, currentColor, colors, newPaletteName,
    } = this.state;
    const paletteIsFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          handleSubmit={this.handleSubmit}
          open={open}
          newPaletteName={newPaletteName}
          palettes={palettes}
          toggleDrawer={this.toggleDrawer}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                disabled={paletteIsFull}
                color="primary"
                onClick={this.addRandomColor}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              currentColor={currentColor}
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            axis="xy"
            onSortEnd={this.onSortEnd}
            colors={colors}
            deleteColor={this.deleteColor}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
