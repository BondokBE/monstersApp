/* jshint esversion: 8 */

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card_list/card_list_component';
import { SearchBox } from './components/search_box/search_box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    // .then(response => console.log(response));
    .then(users => this.setState({ monsters: users }));
  }

  // remember to use arrow function to noe rebind "this" keyword
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    // filteredMonsters.forEach(monster => console.log(monster));
    // console.log(Object.prototype.toString.call(filteredMonsters));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster" 
          handleChange={this.handleChange}  
        />
        <CardList monsters={filteredMonsters}>
          {this.state.monsters.map(monster => <h2 key={monster.id}> {monster.name} </h2>)}
        </CardList>
      </div>
    );
  }
}


export default App;
