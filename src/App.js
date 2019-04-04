import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SigninPage from './components/SigninPage/SigninPage';
import { isAuthenticated } from './services/UserService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SigninPage} />
          <PrivateRoute path="/home" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
