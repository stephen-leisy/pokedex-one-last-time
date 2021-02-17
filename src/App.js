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
import PokemonDetail from './PokemonDetail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>

          <Router>
            <header>
              <NavLink exact className='nav-button' activeClassName='selected' to='/'>HOLMES</NavLink>
              <NavLink exact className='nav-button' activeClassName='selected' to='/pokemon'>SEARCH PAGE</NavLink>
            </header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
              />
              <Route
                path="/pokemon"
                exact
                render={(routerProps) => <SearchPage {...routerProps} />}
              />
              <Route
                path="/pokemon/:pokemonName"
                exact
                render={(routerProps) => <PokemonDetail {...routerProps} />}
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
