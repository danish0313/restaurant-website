import React, { Component } from 'react';

import { Col ,Row ,Container , Form ,} from "react-bootstrap";

import background from '../background.jpg';

class Search extends Component {








	render()  {



return(

<Container fluid={true} className="body-box">

  <Row> 


  <Col md={12} className="back"> 



<Col md ={4} className="search">


<Form onSubmit={this.props.Recipe}  >


    <label>Enter Recipe Name!</label>
    <br/>
    <input className="remove" type="text" placeholder="Enter Recipe...." name ="recipename" />

<button className="btn"> Search!</button>

</Form>

</Col>



  </Col>
  </Row>


</Container>





	)


	}
}

export default Search;



