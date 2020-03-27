import React from 'react';
import 'blueprint-css/dist/blueprint.min.css';
import './App.css';

import PostList from './Components/PostList'

const App = () => {
  return (
    <div className="appContainer" bp="container">
      <PostList />
    </div>
  );
};

export default App;
