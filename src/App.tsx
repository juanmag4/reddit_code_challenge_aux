import React from 'react';
import 'blueprint-css/dist/blueprint.min.css';
import './App.css';

import PostList from './Components/PostList';
import StoreProvider from './Store/store';

const App = () => {
  return (
    <div className="appContainer" bp="container">
      <StoreProvider>
        <PostList />
      </StoreProvider>
    </div>
  );
};

export default App;
