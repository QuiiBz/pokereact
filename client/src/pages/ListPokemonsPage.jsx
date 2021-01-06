import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';

class ListPokemonsPage extends Component {

    componentDidMount() {

        fetch('http://localhost:4242/pokemons').then((response) => {

            response.json().then((pokemons) => {

                this.setState({ pokemons });
            });
        });
    }

    render() {

        if(this.state) {

            return (
                <React.Fragment>
                    <h1 id="title">Nos Pokemons</h1>
                    <div className="pokemonList">
                    {this.state.pokemons.map((pokemon) => {

                        return <Pokemon data={pokemon} key={pokemon.nom} />;
                    })}
                    </div>
                </React.Fragment>
            )

        } else
            return <h1>Pokemons entrain de charger</h1>;
    }
}

export default ListPokemonsPage;
