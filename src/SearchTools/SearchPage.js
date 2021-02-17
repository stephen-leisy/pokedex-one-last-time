import React, { Component } from 'react';
import './Search.css';
// import pokemen from '../data.js';
import PokeList from '../PokeList.js';
import Dropdown from '../Dropdown.js';
import Searchbar from '../Searchbar.js';
// import SearchCategory from '../SearchCategory.js';
import request from 'superagent';
import Spinner from '../Spinner.js';


export default class SearchPage extends Component {
    state = {

        userQuery: '',
        pokeType: 'pokemon',
        sortOrder: 'asc',
        pokemon: [],
        loading: false,
    }
    componentDidMount = async () => {
        this.setState({ loading: true, })
        this.fetchPokemon();
        this.setState({ loading: false, })
    }




    HandlerUserQuery = (e) => {
        this.setState({
            userQuery: e.target.value,
        });
    }



    handlerSortBy = (e) => {
        this.setState({
            pokeType: e.target.value
        });
        console.log(this.state.pokeType)
    }

    handleCLick = async (e) => {
        e.preventDefault();
        await this.fetchPokemon();


    }

    handlerDirectionSort = (e) => {
        this.setState({
            sortOrder: e.target.value

        });
        console.log(this.state.sortOrder)
    }
    fetchPokemon = async () => {
        this.setState({
            loading: true,
        })
        console.log(this.state.userQuery)
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.userQuery}&direction=${this.state.sortOrder}&sort=${this.state.pokeType}`);

        this.setState({
            pokemon: data.body.results,
            loading: false,
        });

    }

    render() {







        return (



            <div className="whole-page">


                <div className="side-bar">
                    <div className='search-bar'>
                        <Searchbar type={'text'} value={this.state.userQuery} onChange={this.HandlerUserQuery} />
                        {/* {this.state.userQuery} */}
                        <button onClick={this.handleCLick} >SEARCH</button>
                        <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handlerDirectionSort} options={['asc', 'desc']} />
                        <Dropdown currentValue={this.state.sortBy} handleChanges={this.handlerSortBy} options={['pokemon', 'type_1']} />
                    </div>
                    {/* <SearchCategory filteredType={uniquePokeType} value={this.state.groupBy} handleChanges={this.handlerGroupBy} /> */}

                </div>


                <div className="content-area">
                    {this.state.loading
                        ? <Spinner className='spinner-thing' />
                        :

                        <ul>
                            <PokeList filteredSearch={this.state.pokemon} />
                        </ul>
                    }
                </div>


            </div>


        )
    }
}
