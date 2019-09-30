import React from 'react';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfeild: ''

        };

    }

    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value});


    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>
            this.setState({robots: users}));


    }

    render() {

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
