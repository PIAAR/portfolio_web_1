import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Nav from './js/components/links/nav-links/navigation.component';
import Nav2 from './js/components/links/nav-links/nav2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Nav2 />
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();