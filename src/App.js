import React from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfeild: ''

        };
        console.log("1")
    }

    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value});


    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>
            this.setState({robots: users}));

        console.log('2');
    }

    render() {
        console.log('3');
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
        });
        if (this.state.robots.length === 0) {
            return <h1>LOARDING</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>)
        }

    }


}


export default App;
