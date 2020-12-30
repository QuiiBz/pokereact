import { Component } from 'react';
import CurrentPokemon from '../components/CurrentPokemon';
import { withRouter } from 'react-router';
import '../styles/currentPokemon.css';

class PokemonPage extends Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        fetch(`http://localhost:4242/pokemons/${id}`).then((response) => {

            response.json().then((pokemon) => {

                this.setState({ pokemon });
            });
        });
    }

    render() {

        if(this.state)
            return <CurrentPokemon pokemon={this.state.pokemon} />;
        else
            return <h1>Pokemon entrain de charger</h1>;
    }
}

export default withRouter(PokemonPage);
