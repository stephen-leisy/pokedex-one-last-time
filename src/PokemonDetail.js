import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class PokemonDetail extends Component {
    state = {

        pokemonData: {},
    }
    componentDidMount = async () => {
        this.setState({ loading: true, })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
            // find(item => item.pokemon === this.props.match.params.pokemonName),
        })
    }


    render() {

        return (

            <div>
                {this.state.loading
                    ? <Spinner className='spinner-thing' />
                    :
                    <div>
                        <h1>{this.state.pokemonData.pokemon}</h1>
                        <img src={this.state.pokemonData.url_image} alt='pokemon' />

                        <p>Attack: {this.state.pokemonData.attack}</p>
                        <p>Defense: {this.state.pokemonData.defense}</p>
                        <p>Type: {this.state.pokemonData.type_1}</p>
                        <p>HP: {this.state.pokemonData.hp}</p>
                        <p>Shape: {this.state.pokemonData.shape}</p>
                        <p>Height: {this.state.pokemonData.height} cm</p>
                    </div>
                }

            </div>
        )

    }
}
