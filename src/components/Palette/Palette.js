import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Query } from 'react-apollo';
import CURRENT_USER_QUERY from '../../graphql/queries/current_user_query';
import generatePalette from '../../helpers/colorHelpers';
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
    this.renderColorBoxes = this.renderColorBoxes.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  }

  renderColorBoxes(palette) {
    const newPalette = generatePalette(palette);
    const { level, format } = this.state;
    const colorBoxes = newPalette.colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={newPalette.id}
        showingFullPalette
      />
    ));
    return colorBoxes;
  }

  render() {
    const {
      classes,
      match: {
        params: { id },
      },
    } = this.props;
    const { level } = this.state;
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <div className={classes.palette}>
              <Navbar
                level={level}
                changeLevel={this.changeLevel}
                changeFormat={this.changeFormat}
                showAllColors
              />
              <div className={classes.paletteColors}>
                {this.renderColorBoxes(
                  data.currentUser.palettes.find(palette => palette.id === id),
                )}
              </div>
              <Footer palette={data.currentUser.palettes.find(palette => palette.id === id)} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Palette);
