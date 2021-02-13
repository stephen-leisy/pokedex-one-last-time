import React, { Component } from 'react'

export default class SearchCategory extends Component {
    render() {
        return (
            <>

                <label htmlFor='bug'>{this.props.filteredType[4]}</label>
                <input id='bug' type="radio" name="group" value="bug" onChange={this.props.handleChanges} />
                <label htmlFor='fire'>{this.props.filteredType[3]}</label>
                <input id='fire' type="radio" name="group" value="fire" onChange={this.props.handleChanges} />
                <label htmlFor='grass'>{this.props.filteredType[2]}</label>
                <input id="grass" type="radio" name="group" value="grass" onChange={this.props.handleChanges}></input>
                <label htmlFor='normal'>{this.props.filteredType[1]}</label>
                <input id="normal" type="radio" name="group" value="normal" onChange={this.props.handleChanges}></input>
                <label htmlFor='water'>{this.props.filteredType[0]}</label>
                <input id='water' type="radio" name="group" value="water" onChange={this.props.handleChanges}></input>





            </>
        )
    }
}

