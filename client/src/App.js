import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblesPage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to ='/login'>Login</Link>
      <Link to='/BubblesPage'>Bubbles</Link>
      <Switch>
        <PrivateRoute path='/BubblesPage'component={BubblesPage} />
        <Route exact path="/login" component={Login} />
        
     </Switch>
   </div>
    </Router>
  );
}

export default App;
