import React, { Component } from 'react';

class colorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <span>{name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default colorBox;
