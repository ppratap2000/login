import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Router>
  );
}

export default App;
