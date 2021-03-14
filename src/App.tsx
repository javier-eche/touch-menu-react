import React, { useEffect } from 'react';
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Axios from 'axios';
import Home from './pages/Home';

function App() {

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await Axios({
        method: 'post',
        url: "http://localhost:8000/api_generate_token/",
        headers: {},
        data:{
          username: 'admin',
          password: '1234',
        }
      });
      sessionStorage.setItem('token', data.token);
    };
    fetchData();
  }, []);

  return (
    <>
      <Global
        styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

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
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
