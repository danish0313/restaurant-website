import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import {Container , Row , Col } from 'react-bootstrap';

const Pager = (props) => {
let page =[];

for (let i = 1; i <= Math.ceil(props.totalrecipes / props.postperpage); i++) {
 page.push(i);
}


  return (
    <React.Fragment>
<Container fluid={true} className="pager">
  <Row>

    <Col xl={12} md={12} sm={12} xs={12}></Col>
    <Pagination className="page">

        {  page.map(number => (
     <Pagination.Item onClick={ () => props.paginate(number)} key={number}>

          <a href='/' onClick={ () => props.paginate(number)} >
          {number}
          </a>

     </Pagination.Item>
))}



    </Pagination>
    </Row>
</Container>
</React.Fragment>
  )
}

export default Pager;
