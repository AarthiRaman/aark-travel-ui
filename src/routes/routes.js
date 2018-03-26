import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from '../pages/login';

export default () => (
    <Router>
        <div>

            <Route exact path="/" component={LoginPage} />
            <Route path="/about" component={LoginPage} />
            <Route path="/search" component={LoginPage} />
      </div>
    </Router>
  );


