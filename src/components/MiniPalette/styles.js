const styles = {
  miniPaletteContainer: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover $deleteIcon': {
      opacity: 1,
    },
  },
  miniPaletteColors: {
    backgroundColor: 'grey',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  miniPaletteTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    alignItems: 'center',
    paddingTop: '0.5rem',
    fontSize: '0.8rem',
    position: 'relative',
  },
  miniPaletteEmoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniPaletteColorBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px',
  },
  delete: {},
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },
};

export default styles;
