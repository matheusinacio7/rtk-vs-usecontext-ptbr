import React from 'react';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const user = useSelector((state) => state.user);

  return(
    <>
      <header className="body-header">
        <h1>Contador Simprão</h1>
        <div>
          <img src={`https://github.com/${user.githubUsername}.png`} alt={`Avatar for github user ${user.githubUsername}`} />
          <section>
            <h1>Olá, <strong>{ user.name }</strong></h1>
            <p>O máximo que colocou o contador foi: <strong>{ user.highestCount }</strong></p>
          </section>
        </div>
      </header>
      { children }
      <footer>Exemplo simples de Redux Toolkit.</footer>
    </>
  );
}

export default Layout;
