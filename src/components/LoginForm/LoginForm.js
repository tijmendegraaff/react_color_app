import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import FormField from '../FormField/FormField';
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
      passwordConformation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setAuthState = this.setAuthState.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(this.state);
  }

  setAuthState(e) {
    const { name } = e.target;
    this.setState({
      auth: name,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConformation: '',
    });
  }

  render() {
    const { classes } = this.props;
    const {
      auth, email, password, firstName, lastName, passwordConformation,
    } = this.state;
    const renderLogin = auth === 'login';
    return (
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formWrapper}>
            {renderLogin ? (
              <>
                <h3 className={classes.title}>Login Page</h3>
                <form onSubmit={this.onSubmit}>
                  <FormField name="email" onChange={this.onChange} type="text" value={email} />
                  <FormField
                    name="password"
                    onChange={this.onChange}
                    type="password"
                    value={password}
                  />
                  <div className={classes.submitButtonContainer}>
                    <button className={classes.submitButton} type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h3 className={classes.title}>Register</h3>
                <form onSubmit={this.onSubmit}>
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
                    name="passwordConformation"
                    onChange={this.onChange}
                    type="password"
                    value={passwordConformation}
                  />
                  <div className={classes.submitButtonContainer}>
                    <button type="submit" className={classes.submitButton}>
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
    );
  }
}

export default withStyles(styles)(LoginForm);
