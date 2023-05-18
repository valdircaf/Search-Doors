import React from 'react';
import './styles/main.scss';
import Main from './Pages/Main';
import { NewContextProvider } from './contexts/repositoryContext';
import SearchResults from './Pages/SearchResults';

function App() {
  return (
    <NewContextProvider>
      <Main />
      <SearchResults />
    </NewContextProvider>

  );
}

export default App;
