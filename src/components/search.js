import React, { Component } from 'react';
import { Col ,Row ,Container , Form ,} from "react-bootstrap";

class Search extends Component {

	render()  {



return(

<Container fluid={true} className="body-box">

  <Row>

<Col xl={12}  md ={12} sm={12} xs={12} className="search">


<Form onSubmit={this.props.Recipe}  className="form" >


    <label>Enter Recipe Name!</label>
    <br/>
    <input className="remove" type="text" placeholder="Enter Recipe...." name ="recipename" />

<button className="btn"> Search!</button>

</Form>

</Col>


  </Row>


</Container>





	)


	}
}

export default Search;
