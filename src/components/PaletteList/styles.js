import { breakPoint } from '../../constants/cssConstants';
import bg from '../../assets/images/backgroundImage.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out',
    },
  },
  paletteListWrapper: {
    backgroundColor: '#4e81aa',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    overflow: 'scroll',
  },
  paletteListContainer: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [breakPoint.down('xl')]: {
      width: '80%',
    },
    [breakPoint.down('xs')]: {
      width: '75%',
    },
  },
  paletteListNav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
  },
  paletteListPalettesContainer: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [breakPoint.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [breakPoint.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
  header: {
    fontSize: '2rem',
  },
};

export default styles;
