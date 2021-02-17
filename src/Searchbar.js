import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <input placeholder='SEARCH ME!' value={this.props.value} onChange={this.props.onChange} className='search-input'></input>
        )
    }
}
