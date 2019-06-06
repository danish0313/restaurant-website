 
import React, {Component} from 'react';
 import Loader from 'react-loader-spinner'
 export default class Oval extends React.Component {
  //other logic
    render() {
     return(
    <Loader type="Oval" color="#1C1C1C" height={80} width={80} />
     );
    }
 }