import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Higher } from './components/Higher';
import { OneMore } from './components/OneMore';
import { OneLess } from './components/OneLess';
import { Between } from './components/Between';

const App = () => (
  <Router>
    <div className="container mx-auto">

      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">Higher</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/one-more">One more</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/one-less">One less</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/between">Between</Link>
        </li>
      </ul>

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
        <Route path="/">
          <Higher />
        </Route>
        <Route path="/higher">
          <Higher />
        </Route>
      </Switch>

    </div>
  </Router>
);

export default App;
