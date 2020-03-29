import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'blueprint-css/dist/blueprint.min.css';
import './App.css';

import StoreProvider from './Store/store';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Gallery from './Components/Gallery';

const App = () => {
  return (
    <div bp="container padding-top--lg">
      <StoreProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
