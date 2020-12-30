import { Component } from 'react';
import './styles/pokemon.css';

class Pokemon extends Component {

    render() {

        return (
            <button className='pokemon' onClick={() => this.props.onClick()}>
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.data.ndex + '.png'} />
                <p className='pokemon-id'>{ this.props.data.numéro }</p>
                <p className='pokemon-name'>{ this.props.data.nom }</p>
            </button>
        )
    }
}

export default Pokemon;
