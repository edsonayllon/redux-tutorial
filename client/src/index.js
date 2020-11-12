import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from 'configs/configureStore';

configureStore()
  .then(({ store }) => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(err => {
    console.log(err)
    ReactDOM.render(
      <React.StrictMode>
        <div>
          <h1>Error</h1>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
