import React, { Component } from 'react';
import CardList from '../components/cardlist';
import Hero from '../components/Hero';
import './Home.css'



class Home extends Component {
  constructor(){
    super();
    this.state={
      monster:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('./data2.json')
    .then(response=>response.json())
    .then(user =>this.setState({monster: user}));
  }
  
  handleChange =(e) => this.setState({searchField: e.target.value})

  render(){

    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
    
      <div className="SApp">
       <Hero/>
       
        <div>
        <h1>POPULAR WRECKS</h1>
        <CardList monster = {filteredMonsters}>
       
        </CardList>
        </div>
      </div>
   
   );
  }
}

export default Home;