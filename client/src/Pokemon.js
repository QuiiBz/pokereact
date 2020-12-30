import { Component } from 'react';
import './styles/pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends Component {

    render() {

        return (
            <Link to={"/" + this.props.data.numéro}>
                <button className='pokemon'>
                    <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.data.ndex + '.png'} />
                    <p className='pokemon-id'>{ this.props.data.numéro }</p>
                    <p className='pokemon-name'>{ this.props.data.nom }</p>
                </button>
            </Link>
        )
    }
}

export default Pokemon;
