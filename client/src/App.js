import { Component } from 'react';
import Pokemon from './Pokemon';
import CurrentPokemon from './CurrentPokemon';

class App extends Component {

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

            if(this.state.currentPokemon)
                return <CurrentPokemon resetPokemon={() => this.resetPokemon()} currentPokemon={this.state.currentPokemon} />
            else {

                return (
                    this.state.pokemons.map((pokemon) => {

                        return <Pokemon onClick={() => this.setPokemon(pokemon)} data={pokemon} key={pokemon.nom} />;
                    })
                )
            }

        } else
            return <h1>Pokemons entrain de charger</h1>
    }

    setPokemon(pokemon) {

        this.setState({

            currentPokemon: pokemon,
        });
    }

    resetPokemon() {

        this.setState({

            currentPokemon: undefined,
        });
    }
}

export default App;
