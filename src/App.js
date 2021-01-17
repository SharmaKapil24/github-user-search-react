import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
      <Switch>
        <PrivateRoute path='/'  exact>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='/login' component={Login}></Route>
        <Route path='*' component={Error}></Route>
      </Switch>
    </Router>

    </AuthWrapper>
    
  );
}

export default App;
