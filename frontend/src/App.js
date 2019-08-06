import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Login } from './components';
import './App.css';

// Styles

const AppWrapper = styled.div`
  position: relative;
`;

// JSX
class App extends Component {
  state = {};

  render() {
    return (
      <AppWrapper key="app">
        <Route exact path="/" component={Login} />
      </AppWrapper>
    );
  }
}

export default withRouter(App);
