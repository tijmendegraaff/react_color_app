import { breakPoint } from '../../constants/cssConstants';

const styles = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteColors: {
    height: '90vh',
  },
  goBackButton: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    marginBottom: '-4px',
    opacity: 1,
    position: 'relative',
    backgroundColor: 'black',
    '& a': {
      color: 'white',
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
    },
    [breakPoint.down('lg')]: {
      height: '33.3333%',
      width: '50%',
    },
    [breakPoint.down('md')]: {
      height: '20%',
      width: '50%',
    },
    [breakPoint.down('xs')]: {
      height: '10%',
      width: '100%',
    },
  },
};
export default styles;
