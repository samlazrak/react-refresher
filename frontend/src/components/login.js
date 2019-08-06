import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  async componentDidMount() {
    this.props.history.replace('/');
  }

  render() {
    return <div>Login</div>;
  }
}

export default withRouter(Login);
