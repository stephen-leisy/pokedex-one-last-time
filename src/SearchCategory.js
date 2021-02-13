import React, { Component } from 'react'

export default class SearchCategory extends Component {
    render() {
        return (
            <>

                <label htmlFor='bug'>BUG</label>
                <input id='bug' type="radio" name="group" value="bug" onChange={this.props.handleChanges} />
                <label htmlFor='fire'>FIRE</label>
                <input id='fire' type="radio" name="group" value="fire" onChange={this.props.handleChanges} />
                <label htmlFor='grass'>GRASS</label>
                <input id="grass" type="radio" name="group" value="grass" onChange={this.props.handleChanges}></input>
                <label htmlFor='normal'>NORMAL</label>
                <input id="normal" type="radio" name="group" value="normal" onChange={this.props.handleChanges}></input>
                <label htmlFor='water'>WATER</label>
                <input id='water' type="radio" name="group" value="water" onChange={this.props.handleChanges}></input>





            </>
        )
    }
}

