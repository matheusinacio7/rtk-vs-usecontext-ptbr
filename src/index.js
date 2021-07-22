import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './hooks/useUser'
import { CounterProvider } from './hooks/useCounter';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
