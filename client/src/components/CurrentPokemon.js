import { Component } from 'react';
import { Link } from 'react-router-dom';

class CurrentPokemon extends Component {

    render() {

        return (
            <div className='current-pokemon'>
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.pokemon.ndex + '.png'} />
                <p className='name'>{ this.props.pokemon.nom }</p>
                <div className='boxs'>
                    <div className='box'>
                        <p>Couleur: <span>{ this.props.pokemon.couleur }</span></p>
                        <p>Espece: <span>{ this.props.pokemon.espece }</span></p>
                        <p>Type 1: <span>{ this.props.pokemon.type }</span></p>
                        <p>Taille: <span>{ this.props.pokemon.taille }</span></p>
                        <p>Poids: <span>{ this.props.pokemon.poids }</span></p>
                        <p>Forme: <span>{ this.props.pokemon.forme }</span></p>
                    </div>
                    <div className='box'>
                        <p>Nom FR: <span>{ this.props.pokemon.nom }</span></p>
                        <p>Nom EN: <span>{ this.props.pokemon.nomen }</span></p>
                        <p>Nom DE: <span>{ this.props.pokemon.nomde }</span></p>
                        <p>Nom TM: <span>{ this.props.pokemon.nomtm }</span></p>
                        <p>Nom JA: <span>{ this.props.pokemon.nomja }</span></p>
                    </div>
                </div>
                <div className='boxs'>
                    {
                        this.props.pokemon.attaques.map((attack) => {

                            return (
                                <div key={attack.nom} className='box'>
                                    <p>Nom: <span>{ attack.nom }</span></p>
                                    <p>Niveau: <span>{ attack.niveau }</span></p>
                                    <p>Puissance: <span>{ attack.puissance }</span></p>
                                    <p>Précision: <span>{ attack.precision }</span></p>
                                    <p>PP: <span>{ attack.pp }</span></p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to="/">
                    <button className='back'>Retour à la liste des pokemons</button>
                </Link>
            </div>
        )
    }
}

export default CurrentPokemon;
