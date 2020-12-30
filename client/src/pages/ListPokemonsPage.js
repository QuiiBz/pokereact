import { Component } from 'react';
import Pokemon from '../Pokemon';

class ListPokemonsPage extends Component {

    componentDidMount() {

        fetch('http://localhost:4000/pokemons').then((response) => {

            response.json().then((json) => {

                this.setState({

                    pokemons: json,
                });
            });
        });
    }

    render() {

        if(this.state) {

            return (
                this.state.pokemons.map((pokemon) => {

                    return <Pokemon data={pokemon} key={pokemon.nom} />;
                })
            )

        } else
            return <h1>Pokemons entrain de charger</h1>
    }
}

export default ListPokemonsPage;
