import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={`pokemon/${this.props.pokemon.pokemon}`}>
                <li key={this.props.pokemon._id}>
                    <h4>{this.props.pokemon.pokemon}</h4>
                    <img src={this.props.pokemon.url_image} alt="pokemon" />
                    {/* <p>{this.props.pokemon.ability_1}</p> */}
                    <p>{this.props.pokemon.type_1}</p>
                </li>
            </Link>
        )
    }

}
