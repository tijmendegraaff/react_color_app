import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class colorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { background, name } = this.props;
    return (
      <CopyToClipboard text={background}>
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
      </CopyToClipboard>
    );
  }
}

export default colorBox;
