import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListPokemonsPage from './pages/ListPokemonsPage';
import PokemonPage from './pages/PokemonPage';

export default class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ListPokemonsPage} />
                    <Route path="/:id" component={PokemonPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
