import React, {Component} from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './Wrecks.css'

class Wrecks extends Component {
  constructor(){
    super();
    this.state={
      monster:[],
      searchField:''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  //All button
  handleClick() {
    this.setState(state => ({
      searchField:''
    }));
  }
  handleClick1() {
    this.setState(state => ({
      searchField:'1 Series'
    }));
  }
  handleClick2() {
    this.setState(state => ({
      searchField:'3 Series'
    }));
  }
  handleClick3() {
    this.setState(state => ({
      searchField:'5 Series'
    }));
  }
  handleClick4() {
    this.setState(state => ({
      searchField:'M3'
    }));
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response=>response.json())
    .then(user =>this.setState({monster: user}));
  }
  
  handleChange =(e) => this.setState({searchField: e.target.value})

  render(){

    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.status.toLowerCase().includes(searchField.toLowerCase()));

    return (
    
      <div className="SApp">

<div className='mybtn'>

<Button variant="dark"
 onClick={this.handleClick}>
      All
      </Button>
<Button variant="dark"
 onClick={this.handleClick1}>
     1 Series
      </Button>
<Button variant="dark"
 onClick={this.handleClick2}>
     3 Series
      </Button>
<Button variant="dark"
 onClick={this.handleClick3}>
     5 Series
      </Button>
<Button variant="dark"
 onClick={this.handleClick4}>
     M3
      </Button>

      </div>  
        <SearchBox
          placeholder='Search Cars'
          handleChange={this.handleChange}
        />
        <div>
        <CardList monster = {filteredMonsters}>
       
        </CardList>
        </div>
      </div>
   
   );
  }
}


export default Wrecks;

