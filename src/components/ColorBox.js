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
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button" type="button">
            Copy
          </button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default colorBox;
