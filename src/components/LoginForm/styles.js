import bg from '../../assets/images/backgroundImage.svg';

const styles = {
  container: {
    backgroundColor: '#4e81aa',
    backgroundImage: `url(${bg})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  formContainer: {
    height: '100vh',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formWrapper: {
    marginLeft: '5rem',
    backgroundColor: 'white',
    width: '50%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'red',
    width: '100%',
    height: '100px',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  button: {
    width: '50%',
  },
};

export default styles;
