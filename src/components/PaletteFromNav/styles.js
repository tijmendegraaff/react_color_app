import { drawerWidth, breakPoint } from '../../constants/cssConstants';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  navButtons: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    [breakPoint.down('xs')]: {
      marginRight: '0.5rem',
    },
  },
  button: {
    margin: '0 0.5rem',
    [breakPoint.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.2rem',
    },
  },
});

export default styles;
