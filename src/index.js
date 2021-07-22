import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './hooks/useUser'
import { CounterProvider } from './hooks/useCounter';

/* Nota: Context ao redor de toda a aplicação
    geralmente é uma má ideia.
  Na vida real, precisaríamos pensar em como
    colocar cada contexto ao redor de cada grupo
    de componentes... */

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
