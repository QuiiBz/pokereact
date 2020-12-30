import { Component } from 'react';
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
                this.state.pokemons.map((pokemon) => {

                    return <Pokemon data={pokemon} key={pokemon.nom} />;
                })
            )

        } else
            return <h1>Pokemons entrain de charger</h1>;
    }
}

export default ListPokemonsPage;
