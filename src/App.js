import React, { Component} from 'react';

import './App.css';

import Search from './components/search.js';

import Menu from './components/menu.js';

import Oval from './components/oval.js';

import Body from "./components/body.js";

import   Pager from "./components/pagination/pagination";


class App extends Component {


 state = {

data : [],
current_page : 1,
postperpage : 5


  };




Recipe = async(e) => {

 const API_KEY = '8c009e936441b08ba9484ac72953b872';


e.preventDefault();

const name = e.target.elements.recipename.value;

const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}&count=50`) ;


const result = await API_CALL.json();


this.setState({

data : result.recipes


});



}



paginate = (page) => {


  this.setState({

current_page :  page


  });



}




  render() {

// get current-Recipes

const indexlast = this.state.current_page * this.state.postperpage ;

const  indexfirst =  indexlast - this.state.postperpage;

const current_recipes = this.state.data.slice(indexfirst, indexlast ) ;

    return (

<React.Fragment>


<Menu/>

 <Search  Recipe={this.Recipe} />

   {this.state.data.length === 0 ? <center style={{marginTop:50}}><Oval/> <br/>
 <h3 style={{ fontFamily: 'oxygen' , color: '#ffff'}}>PLEASE ENTER YOUR RECIPE NAME! </h3></center> :
    <Body Recipe={current_recipes}  /> }


<Pager postperpage={this.state.postperpage} paginate={this.paginate} totalrecipes={this.state.data.length} />

</React.Fragment>

    )
  }
}

export default App;
