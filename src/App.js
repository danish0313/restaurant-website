import React, { Component} from 'react';

import './App.css';

import Search from './components/search.js';

import Menu from './components/menu.js';

import Oval from './components/oval.js';

import Body from "./components/body.js";

 
class App extends Component {


 state = {

data : []


  };




Recipe = async(e) => {

 const API_KEY = '8c009e936441b08ba9484ac72953b872';


e.preventDefault();

const name = e.target.elements.recipename.value;

const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}&count=6`) ;


const result = await API_CALL.json();


this.setState({

data : result.recipes


});

console.log(this.state.data)
}




  render() {




    return (

<React.Fragment>


<Menu/>

 <Search  Recipe={this.Recipe} />



   {this.state.data.length === 0 ? <center style={{marginTop:50}}><Oval/> <br/>
    <h3 style={{ fontFamily: 'oxygen' , color: '#1C1C1C'}}>PLEASE ENTER YOUR RECIPE NAME! </h3></center> : <Body Recipe={this.state.data}  /> }

</React.Fragment>

    )
  }
}

export default App;