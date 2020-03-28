import React from 'react';
import 'blueprint-css/dist/blueprint.min.css';
import './App.css';

import StoreProvider from './Store/store';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <div bp="container padding-top--lg">
      <StoreProvider>
        <Dashboard />
      </StoreProvider>
    </div>
  );
};

export default App;
