import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link data-testid="logoutButton" onClick={logout} to="/">logout</Link>
        </header> 

        <ProtectedRoute path="/bubbles" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.