import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Query } from 'react-apollo';
import generatePalette from '../../helpers/colorHelpers';
import CURRENT_USER_QUERY from '../../graphql/queries/current_user_query';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './styles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
    };
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades = (oldPalette, colorFilterBy) => {
    const palette = generatePalette(oldPalette);
    let shades = [];
    const allColors = palette.colors;
    Object.keys(allColors).forEach((key) => {
      shades = shades.concat(allColors[key].filter(color => color.id === colorFilterBy));
    });
    return shades.slice(1);
  };

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { paletteId, colorId, classes } = this.props;

    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const palette = data.currentUser.palettes.find(p => p.id === paletteId);
          const shades = this.gatherShades(palette, colorId);
          const ColorBoxes = shades.map(color => (
            <ColorBox
              key={color.name}
              name={color.name}
              background={color[format]}
              showingFullPalette={false}
            />
          ));
          return (
            <div className={classes.palette}>
              <Navbar changeFormat={this.changeFormat} showAllColors={false} />
              <div className={classes.paletteColors}>
                {ColorBoxes}
                <div className={classes.goBackButton} style={{ backgroundColor: 'black' }}>
                  <Link to={`/palette/${palette.id}`}>Go Back</Link>
                </div>
              </div>
              <Footer palette={palette} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
