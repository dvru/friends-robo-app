import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }   
}

class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: []
        }
        // console.log('constructor')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users => this.setState({robots : users}));
        // console.log('componentDidMount')
    }

    // onSearchChange = (e) => {
    //     this.setState({ searchfield: e.target.value })
    // }

    render() { 
        const { robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log('render')
        return !robots.length 
        ?
        <h1>Loading</h1> 
        :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBar searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// STATE >> props