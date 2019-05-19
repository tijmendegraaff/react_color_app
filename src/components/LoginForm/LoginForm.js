import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/styles';
import LOGIN_MUTATION from '../../graphql/mutations/login_mutation';
import REGISTER_MUTATION from '../../graphql/mutations/register_mutation';
import FormField from '../FormField/FormField';
import { AUTH_TOKEN } from '../../constants/constants';
import styles from './styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: 'login',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.setAuthState = this.setAuthState.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setAuthState(e) {
    const { name } = e.target;
    this.setState({
      auth: name,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  }

  saveToken = async (data) => {
    const { auth } = this.state;
    const loginState = auth === 'login';
    const { history } = this.props;
    const { token } = loginState ? data.createSession : data.createUser;
    await localStorage.setItem(AUTH_TOKEN, token);
    history.push('/');
  };

  render() {
    const { classes } = this.props;

    const {
      auth, email, password, firstName, lastName, passwordConfirmation,
    } = this.state;

    const loginState = auth === 'login';

    return (
      <Mutation
        mutation={loginState ? LOGIN_MUTATION : REGISTER_MUTATION}
        variables={
          loginState
            ? { input: { email, password } }
            : {
              input: {
                firstName,
                lastName,
                email,
                password,
                passwordConfirmation,
              },
            }
        }
        onCompleted={data => this.saveToken(data)}
        onError={error => console.log(error.message)}
      >
        {(mutation, { loading }) => (
          <div className={classes.container}>
            <div className={classes.formContainer}>
              <div className={classes.formWrapper}>
                {loginState ? (
                  <>
                    <h3 className={classes.title}>Login Page</h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        mutation();
                      }}
                    >
                      <FormField name="email" onChange={this.onChange} type="text" value={email} />
                      <FormField
                        name="password"
                        onChange={this.onChange}
                        type="password"
                        value={password}
                      />
                      <div className={classes.submitButtonContainer}>
                        <button disabled={loading} className={classes.submitButton} type="submit">
                          Login
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <h3 className={classes.title}>Register</h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        mutation();
                      }}
                    >
                      <FormField
                        name="firstName"
                        onChange={this.onChange}
                        type="text"
                        value={firstName}
                      />
                      <FormField
                        name="lastName"
                        onChange={this.onChange}
                        type="text"
                        value={lastName}
                      />
                      <FormField name="email" onChange={this.onChange} type="text" value={email} />
                      <FormField
                        name="password"
                        onChange={this.onChange}
                        type="password"
                        value={password}
                      />
                      <FormField
                        name="passwordConfirmation"
                        onChange={this.onChange}
                        type="password"
                        value={passwordConfirmation}
                      />
                      <div className={classes.submitButtonContainer}>
                        <button disabled={loading} type="submit" className={classes.submitButton}>
                          Register
                        </button>
                      </div>
                    </form>
                  </>
                )}

                <div className={classes.buttonContainer}>
                  <button
                    name="login"
                    type="button"
                    className={classes.button}
                    onClick={this.setAuthState}
                  >
                    Login
                  </button>
                  <button
                    name="register"
                    type="button"
                    className={classes.button}
                    onClick={this.setAuthState}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(LoginForm);
