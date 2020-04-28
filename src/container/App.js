import React , { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scorll'
import './App.css';


class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        } 
    }

    componentDidMount() {
        this.setState({robots: robots});
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } )    
    }

    render() {

        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());})
        return (
                <div className="tc">
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <p></p>
                    <Scroll><CardList robots={filterRobots}/> </Scroll>  
                </div>         
            );      
        }
    }
 
export default App;