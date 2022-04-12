import React, { useState, useMemo } from "react";
import { BrowserRouter as Link, Router, Route, BrowserRouter  } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser])
  return (
    <BrowserRouter>

    <div className="App">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
      <UserContext.Provider value={value}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </UserContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
