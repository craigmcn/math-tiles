import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StoreProvider from "./store"
import './App.css';
import { MenuButton } from './components/MenuButton';
import { Menu } from './components/Menu';
import { Start } from './components/Start';
import { Higher } from './components/Higher';
import { Lower } from './components/Lower';
import { OneMore } from './components/OneMore';
import { OneLess } from './components/OneLess';
import { Between } from './components/Between';
import { Add } from './components/Add';
import { Subtract } from './components/Subtract';

const App = () => (
  <StoreProvider>
    <Router>
      <div className="container mx-auto">

        <MenuButton />
        <Menu />

        <Switch>
          <Route path="/one-more">
            <OneMore />
          </Route>
          <Route path="/one-less">
            <OneLess />
          </Route>
          <Route path="/between">
            <Between />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/subtract">
            <Subtract />
          </Route>
          <Route path="/higher">
            <Higher />
          </Route>
          <Route path="/lower">
            <Lower />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>

      </div>
    </Router>
  </StoreProvider>
);

export default App;
