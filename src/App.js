import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home.js';
import SearchPage from './SearchTools/SearchPage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>

          <Router>
            <header>
              <NavLink exact className='nav-button' activeClassName='selected' to='/'>HOLMES</NavLink>
              <NavLink exact className='nav-button' activeClassName='selected' to='/search'>SEARCH PAGE</NavLink>
            </header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
              />
              <Route
                path="/search"
                exact
                render={(routerProps) => <SearchPage {...routerProps} />}
              />
            </Switch>
          </Router>
          <footer>

          </footer>
        </div>

      </div>
    )
  }
}
