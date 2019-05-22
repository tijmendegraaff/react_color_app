import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles';

class colorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    console.log(this.props);
    const {
      background, name, colorId, paletteId, showingFullPalette, classes,
    } = this.props;
    const { copied } = this.state;

    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && `${classes.showOverlay}`}`}
          />
          <div className={`${classes.copyMessage} ${copied && `${classes.copyMessageShow}`}`}>
            <h1 className={isLightColor ? 'dark-text' : undefined}>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton} type="button">
            Copy
          </button>
          {showingFullPalette && (
            <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(colorBox);
