import React , {Component} from 'react';

import Menu from './menu.js';


import {Container, Row , Col , Image , Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class Recipes extends Component {

state ={

details : []

};



componentDidMount = async () => {

const API_KEY = '8c009e936441b08ba9484ac72953b872';


const title = this.props.location.state.recipe;

const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`) ;


const data = await API_CALL.json();


this.setState({

details : data.recipes[0]



})


}


	
render() {


return (


	<div>
<Menu/>




<Container>

<Row>
<Col xl={12} md={12} sm={12} xs={12}> <h1 className="details"> Recipes details..... </h1> </Col>

</Row>

<Row style={{'marginTop': '40px'}}>

<Col xl={6} md={12} sm={12} xs={12} className="box-1"> 

 <Link to="/">   <Button variant="primary" size="sm" className="recipe-btn">    GO BACK!  </Button> </Link> 

  <Image className="details-img" src={this.state.details.image_url} alt={this.state.details.title} />     </Col>

<Col xl={6} md={12} sm={12} xs={12} className="box-2"> 

<div className="box-2-title"> Tittle of Recipe: <br/>

 {this.state.details.title} 


 <hr/>

  </div>



<div className="box-2-publisher"> Publisher: <br/>

 {this.state.details.publisher} 


 <hr/>

  </div>




<div className="box-2-url"> Website: <br/>

 <a href="http://thepioneerwoman.com">{this.state.details.publisher_url} 
</a>

 <hr/>

  </div>



  </Col>


</Row>



</Container>

</div>






);


}

}


export default  Recipes;
