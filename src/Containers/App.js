import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users => this.setState({robots : users}));
        // console.log('componentDidMount')
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render() { 
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log('render')
        return !robots.length 
        ?
        <h1>Loading</h1> 
        :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App;

// STATE >> props