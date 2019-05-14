import chroma from 'chroma-js';

const styles = {
  colorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    '&:hover $copyButton': {
      opacity: 1,
      transition: '0.5s',
    },
  },
  copyText: {
    color: props => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
  },
  colorName: {
    color: props => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'),
  },
  seeMore: {
    color: props => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: props => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: 0,
  },
};

export default styles;
