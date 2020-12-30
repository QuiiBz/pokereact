import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ListPokemonsPage from './pages/ListPokemonsPage';
import PokemonPage from './pages/PokemonPage';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ListPokemonsPage} />
            <Route path="/:id" component={PokemonPage} />
        </Switch>
    </Router>

    , document.getElementById('root'));
