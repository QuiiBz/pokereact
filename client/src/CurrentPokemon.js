import { Component } from 'react';
import './styles/currentPokemon.css';

class CurrentPokemon extends Component {

    render() {

        return (
            <div className='current-pokemon'>
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.currentPokemon.ndex + '.png'} />
                <p className='name'>{ this.props.currentPokemon.nom }</p>
                <div className='boxs'>
                    <div className='box'>
                        <p>Couleur: <span>{ this.props.currentPokemon.couleur }</span></p>
                        <p>Espece: <span>{ this.props.currentPokemon.espece }</span></p>
                        <p>Type 1: <span>{ this.props.currentPokemon.type }</span></p>
                        <p>Taille: <span>{ this.props.currentPokemon.taille }</span></p>
                        <p>Poids: <span>{ this.props.currentPokemon.poids }</span></p>
                        <p>Forme: <span>{ this.props.currentPokemon.forme }</span></p>
                    </div>
                    <div className='box'>
                        <p>Nom FR: <span>{ this.props.currentPokemon.nom }</span></p>
                        <p>Nom EN: <span>{ this.props.currentPokemon.nomen }</span></p>
                        <p>Nom DE: <span>{ this.props.currentPokemon.nomde }</span></p>
                        <p>Nom TM: <span>{ this.props.currentPokemon.nomtm }</span></p>
                        <p>Nom JA: <span>{ this.props.currentPokemon.nomja }</span></p>
                    </div>
                </div>
                <div className='boxs'>
                    {
                        this.props.currentPokemon.attaques.map((attack) => {

                            return (
                                <div className='box'>
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
                <button className='back' onClick={() => this.props.resetPokemon()}>Retour à la liste des pokemons</button>
            </div>
        )
    }
}

export default CurrentPokemon;
