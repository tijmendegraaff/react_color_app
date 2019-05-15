import { breakPoint } from '../../constants/cssConstants';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
    },
    [breakPoint.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [breakPoint.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [breakPoint.down('xs')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  },
};

export default styles;
