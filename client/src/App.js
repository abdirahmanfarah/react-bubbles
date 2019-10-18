import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <p><Link to ='/login'>Login</Link></p>
      <Link to='/BubblesPage'>Bubbles</Link>
      <Switch>
        <PrivateRoute path='/BubblesPage' />
        <Route exact path="/" component={Login} />
        
     </Switch>
   </div>
    </Router>
  );
}

export default App;
