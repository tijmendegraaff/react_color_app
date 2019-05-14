import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PaletteList from '../components/PaletteList';
import NewPaletteForm from '../components/NewPaletteForm/NewPaletteForm';
import Palette from '../components/Palette/Palette';
import SingleColorPalette from '../components/SingleColorPalette/SingleColorPalette';
import NotFoundPage from '../pages/NotFoundPage';
import seedColors from '../constants/seedColors';
import generatePalette from '../helpers/colorHelpers';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    const { palettes } = this.state;
    return generatePalette(palettes.find(palette => palette.id === id));
  }

  async savePalette(newPalette) {
    const { palettes } = this.state;
    await this.setState({ palettes: [...palettes, newPalette] });
    this.syncLocalStorage();
  }

  deletePalette(id) {
    const { palettes } = this.state;
    const newPalettes = palettes.filter(palette => palette.id !== id);
    this.setState({ palettes: newPalettes }, () => this.syncLocalStorage());
  }

  syncLocalStorage() {
    const { palettes } = this.state;
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }

  render() {
    const { palettes } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PaletteList palettes={palettes} deletePalette={this.deletePalette} />}
          />
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm palettes={palettes} savePalette={this.savePalette} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette palette={this.findPalette(routeProps.match.params.id)} />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={this.findPalette(routeProps.match.params.paletteId)}
              />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
