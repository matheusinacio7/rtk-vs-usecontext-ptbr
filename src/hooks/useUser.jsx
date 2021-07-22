import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState(null);
  const [highestCount, setHighestCount] = useState(0);

  // wrappers para poder adicionar funcionalidade caso necessario sem modificar a interface;
  const updateName = setName;
  const updateGithubUsername = setGithubUsername;

  function updateHighestCount(count) {
    if (count > highestCount) {
      setHighestCount(count);
    }
  }

  return (
    <UserContext.Provider
      value={{
        name,
        githubUsername,
        highestCount,
        updateName,
        updateGithubUsername,
        updateHighestCount,
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext);

export default useUser;
