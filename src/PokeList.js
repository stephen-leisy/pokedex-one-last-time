import React, { Component } from 'react'
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render() {
        return (
            <ul>
                {this.props.filteredSearch.map(pokemon => <PokeItem key={pokemon._id} pokemon={pokemon} />)}
            </ul>
        )
    }
}
