import { breakPoint } from '../../constants/cssConstants';

const styles = {
  paletteListWrapper: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
      gridGap: '1rem',
    },
  },
};

export default styles;
