import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(email, password);
  }

  render() {
    const { classes } = this.props;
    const { login, email, password } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formWrapper}>
            <p>Login Page</p>
            <form onSubmit={this.onSubmit}>
              <div>
                <label htmlFor="email">
                  email
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.onChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  password
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                </label>
              </div>
              <button type="submit">Login</button>
            </form>
            <div className={classes.buttonContainer}>
              <button type="button" className={classes.button}>
                Login
              </button>
              <button type="button" className={classes.button}>
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
