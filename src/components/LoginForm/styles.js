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
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '5px',
  },
  title: {
    alignSelf: 'center',
    margin: '2rem 0',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formLabel: {
    // width: '100%',
    // justifySelf: 'center',
    marginLeft: '2rem',
  },
  formInput: {
    margin: '0 2rem',
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    margin: '2rem',
    justifySelf: 'center',
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
