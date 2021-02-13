import React, { Component } from 'react';
import './Search.css';
import pokemen from '../data.js';
import PokeList from '../PokeList.js';
import Dropdown from '../Dropdown.js';
import Searchbar from '../Searchbar.js';
import SearchCategory from '../SearchCategory.js';


export default class SearchPage extends Component {
    state = {
        // pokemon: '',
        userQuery: '',
        pokeType: '',
        sortBy: 'pokemon',
        sortOrder: 'Ascend',
        groupBY: ''

    }

    HandlerUserQuery = (e) => {
        this.setState({
            userQuery: e.target.value,
        });
    }
    handlerType = (e) => {
        this.setState({
            pokeType: e.target.value
        });
    }
    handlerDirectionSort = (e) => {
        this.setState({
            sortOrder: e.target.value
        });
    }
    handlerSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        });
    }
    handlerGroupBy = (e) => {
        this.setState({
            groupBY: e.target.value
        });
    }


    render() {
        if (this.state.sortOrder === 'Ascend') {
            pokemen.sort(
                (a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])
            );

        }
        if (this.state.sortOrder === 'Descend') {
            pokemen.sort(
                (a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])
            );

        }


        console.log(this.state.sortOrder)


        const uniquePokeType = [...new Set(pokemen.map(pokemon => pokemon.type_1))];
        console.log(uniquePokeType)
        console.log(this.state.groupBY)
        console.log(pokemen[0].type_1)
        const filteredSearch = pokemen.filter((pokemon) => {
            if (!this.state.userQuery && !this.state.groupBY) return true;


            if (pokemon.pokemon.includes(this.state.userQuery) && !this.state.groupBY) return true;

            if (pokemon.type_1 === this.state.groupBY && !this.state.userQuery) return true;

            if (pokemon.pokemon.includes(this.state.userQuery) && pokemon.type_1 === this.state.groupBY) return true;

            // if (this.state.sortOrder && !this.state.userQuery) {


            // }

            return false;

        })

        return (

            <form >
                <div className="whole-page">


                    <div className="side-bar">
                        <Searchbar type={'text'} value={this.state.userQuery} onChange={this.HandlerUserQuery} />
                        {this.state.userQuery}
                        <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handlerDirectionSort} options={['Ascend', 'Descend']} />
                        <Dropdown currentValue={this.state.sortBy} handleChanges={this.handlerSortBy} options={['pokemon', 'type_1']} />
                        {/* <Dropdown currentValue={this.state.pokeType} handleChanges={this.handlerType} options={uniquePokeType} /> */}
                        <SearchCategory filteredType={uniquePokeType} value={this.state.groupBy} handleChanges={this.handlerGroupBy} />

                    </div>


                    <div className="content-area">
                        <ul>
                            <PokeList filteredSearch={filteredSearch} />
                        </ul>

                    </div>

                </div>
            </form >

        )
    }
}
