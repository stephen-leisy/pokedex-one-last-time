import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select value={this.props.currentValue} onChange={this.props.handleChanges}>
                {
                    this.props.options.map(pokemon => <option value={pokemon}>{pokemon}</option>)
                }

            </select>
        )
    }
}

