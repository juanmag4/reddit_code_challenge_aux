import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'blueprint-css/dist/blueprint.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

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
        <ToastContainer />
      </StoreProvider>
    </div>
  );
};

export default App;
