import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Jobs from './pages/Jobs';

const Routes = () => {
    return (
      <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={Jobs} exact path="/jobs" />
      </BrowserRouter>
    );
  };
  

export default Routes;