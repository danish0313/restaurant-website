import React , {Component} from 'react';

import {Container , Row , Col , Image , Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';



class Body extends Component {


render(){



return (

<Container fluid={true}>
<Row className="space-top">



{this.props.Recipe.map( values =>


<Col md={6} xs={12} xl={4} sm={12} className="cols" key={values.recipe_id} >

<Col md={12} sm={12} xl={12} xs={12} className="inner-box">

  <div className="img-box"> <Image className="img-body " src={values.image_url} rounded />

  </div>

 <h5>  {values.title.substring(0, 25)}</h5>

 <h6> <b>publisher:  {values.publisher} </b></h6>

       <Link to ={{ pathname : `/recipes/${values.recipe_id}`,
                    state     : { recipe : values.title     }


   }} >   <Button  size="sm" className="recipe-btn">    VIEW RECIPE  </Button>  </Link>

</Col>

</Col>

)}


</Row>

</Container>


)


}

}


export default Body;
