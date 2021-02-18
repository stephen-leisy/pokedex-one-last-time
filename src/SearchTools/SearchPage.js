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
        pageNumber: 1,
        pokePerPage: 20,
        totalPokemon: 0,
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
        await this.setState({ pageNumber: 1, })
        await this.fetchPokemon();



    }
    handlePerPage = (e) => {
        this.setState({
            pokePerPage: e.target.value,
        })
    }

    handlerDirectionSort = (e) => {
        this.setState({
            sortOrder: e.target.value

        });
        console.log(this.state.sortOrder)
    }
    handleForwardClick = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1,
        })
        await this.fetchPokemon()
    }
    handleBackClick = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1,
        })
        await this.fetchPokemon()

    }
    fetchPokemon = async () => {
        this.setState({
            loading: true,


        })
        console.log(this.state.userQuery)
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.userQuery}&direction=${this.state.sortOrder}&sort=${this.state.pokeType}&page=${this.state.pageNumber}&perPage=${this.state.pokePerPage}`);

        this.setState({
            pokemon: data.body.results,
            loading: false,
            totalPokemon: data.body.count,
        });

    }

    render() {






        const lastPage = Math.ceil(this.state.totalPokemon / this.state.pokePerPage)
        return (



            <div className="whole-page">


                <div className="side-bar">
                    <div className='search-bar'>
                        <Searchbar className="search-bar-solo" type={'text'} value={this.state.userQuery} onChange={this.HandlerUserQuery} />
                        {/* {this.state.userQuery} */}

                        <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handlerDirectionSort} options={[{ value: 'asc', textContent: 'Ascending' }, { value: 'desc', textContent: 'Descending' }]} />
                        <Dropdown currentValue={this.state.sortBy} handleChanges={this.handlerSortBy} options={[{ value: 'pokemon', textContent: 'Pokemon' }, { value: 'type_1', textContent: 'Type' }]} />
                        <select onChange={this.handlePerPage}>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={75}>75</option>
                            <option value={100}>100</option>
                        </select>
                        <button onClick={this.handleCLick} >SEARCH</button>
                    </div>
                    {/* <SearchCategory filteredType={uniquePokeType} value={this.state.groupBy} handleChanges={this.handlerGroupBy} /> */}

                </div>


                <div className="content-area">
                    {this.state.loading
                        ? <Spinner className='spinner-thing' />
                        :

                        <div className='page-buttons'>
                            <div>
                                <button onClick={this.handleBackClick} disabled={this.state.pageNumber === 1}>back</button>
                                <button onClick={this.handleForwardClick} disabled={this.state.pageNumber === lastPage}>forward</button>
                           Page {this.state.pageNumber}
                            </div>

                            <ul>
                                <PokeList filteredSearch={this.state.pokemon} />
                            </ul>

                        </div>
                    }
                </div>


            </div>


        )
    }
}
