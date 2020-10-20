import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import DetalhePage from "../Detalhe";
import HomePage from "../Home";

const App = () => (
  <Router>
    <Route exact path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.DETALHE} component={DetalhePage} />
  </Router>
);

export default App;
