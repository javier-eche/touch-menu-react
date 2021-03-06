import React, { useState } from 'react';
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './assets/contexts/contexts';
import Login from './pages/Login';
import Home from './pages/Home';
import MainMenu from './pages/MainMenu';
import Resume from './pages/Resume';

function App() {

  const [statusResume, setStatusResume] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentClient, setCurrentClient] = useState("");

  const changueStatusResume = () => {
    currentOrder !== [] ? setStatusResume(true) : setStatusResume(false);
  }

  return (
    <>
      <Global
        styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        *{
          font-family: Source Code Pro;
          color: #000000;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #f2f2f2;
        }
        `}
      />
      <Router>
        <Switch>
        <UserContext.Provider value={{ statusResume, changueStatusResume, currentOrder, setCurrentOrder, currentClient, setCurrentClient }} >
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/mainmenu" component={MainMenu} />
            <Route exact path="/" component={Login} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
