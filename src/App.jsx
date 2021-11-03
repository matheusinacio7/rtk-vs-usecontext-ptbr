import { useEffect, useState } from 'react';
import useCounter from './hooks/useCounter';
import useUser from './hooks/useUser';
import Layout from './components/Layout';

function App() {
  const { updateName, updateGithubUsername, updateHighestCount } = useUser();
  const { count, increment, decrement } = useCounter();

  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  useEffect(() => {
    updateHighestCount(count);
  }, [count, updateHighestCount]);

  function handleSubmit(e) {
    e.preventDefault();

    const { id } = e.target;

    switch (id) {
      case 'name-form':
        updateName(name);
        break;
      case 'github-username-form':
        updateGithubUsername(githubUsername);
        break;
      default:
        break;
    }
  }

  return (
    <Layout>
      <main className="App">
        <p>O valor atual é: <strong>{ count }</strong></p>

        <section className="counter-controls-section" aria-label="counter-controls">
          <div>
            <button onClick={ () => increment() }>Aumentar</button>
            <button onClick={ () => decrement() }>Diminuir</button>
          </div>
        </section>

        <section arial-label="user-controls">
          <form id="name-form" onSubmit={ handleSubmit }>
            <label htmlFor="name-update">
              Nome
              <input
                id="name-update"
                type="text"
                value={ name }
                onChange={ ({ target }) => setName(target.value) }
              />
            </label>

            <button type="submit">Atualizar meu nome</button>
          </form>

          <form id="github-username-form" onSubmit={ handleSubmit }>
            <label htmlFor="name-update">
              Username do GitHub
              <input
                id="name-update"
                type="text"
                value={ githubUsername }
                onChange={ ({ target }) => setGithubUsername(target.value) }
              />
            </label>

            <button type="submit">Atualizar meu avatar</button>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default App;
