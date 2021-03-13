import React from 'react';
import { Global, css } from "@emotion/react";
import Login from './pages/Login';

function App() {
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
      <Login />
    </>
  );
}

export default App;
