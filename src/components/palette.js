import React, { Component } from 'react';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{/* bunch of color boxes */}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;
