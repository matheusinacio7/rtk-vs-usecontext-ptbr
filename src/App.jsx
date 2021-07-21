import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHighestCount, updateName, updateGithubUsername } from './slices/user';
import { increment, decrement } from './slices/counter';
import Layout from './components/Layout';

function App() {
  const count =  useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  useEffect(() => {
    dispatch(updateHighestCount(count));
  }, [dispatch, count]);

  function handleSubmit(e) {
    e.preventDefault();

    const { id } = e.target;

    switch (id) {
      case 'name-form':
        dispatch(updateName(name));
        break;
      case 'github-username-form':
        dispatch(updateGithubUsername(githubUsername));
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
            <button onClick={ () => dispatch(increment()) }>Aumentar</button>
            <button onClick={ () => dispatch(decrement()) }>Diminuir</button>
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
