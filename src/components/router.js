import React , {Component} from 'react';

import {Route , Switch , BrowserRouter}  from 'react-router-dom';

import Recipes from './recipes.js';
import App from '../App.js';


class Router extends Component {

render() {

return (

<BrowserRouter>
<Switch>

<Route exact path="/" component={App}/>
<Route path="/recipes/:id" component={Recipes}/>

</Switch>

</BrowserRouter>

	)


}



}
	

export default Router;