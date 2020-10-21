import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Bigger } from './components/Bigger';
import { OneMore } from './components/OneMore';
import { OneLess } from './components/OneLess';

const App = () => (
  <Router>
    <div className="container mx-auto">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">Bigger</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/one-more">One more</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/one-less">One less</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/one-more">
          <OneMore />
        </Route>
        <Route path="/one-less">
          <OneLess />
        </Route>
        <Route path="/">
          <Bigger />
        </Route>
        <Route path="/bigger">
          <Bigger />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
