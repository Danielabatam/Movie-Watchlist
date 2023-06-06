// 06/06/2023
//https://github.com/MattDobsonWeb/movie-watchlist-react
//https://www.youtube.com/watch?v=1eO_hNYzaSc&list=PLGQgmAVoqRvUbONMu_QKjWePYN6ZuJxgQ&index=11
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
