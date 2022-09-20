import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Satoshi', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: #333333;
        }
        p {
          font-size: 16px;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        a img {
          display: inline-block;
          vertical-align: middle;
          padding-right: 14px;
        }
        button img {
          display: inline-block;
          vertical-align: middle;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
