import React , {Component , lazy, Suspense } from 'react';

import {Switch , BrowserRouter , Redirect}  from 'react-router-dom';

import Oval from './oval.js';

const App = lazy(() => import("../App.js"));
const Recipes = lazy(() => import("./recipes.js"));

class Router extends Component {


componentDidMount() {

	console.log(this.props);
}
render() {








return (
	<div>
<BrowserRouter>
<Suspense fallback={ <center style={{marginTop:50}}><Oval/></center>}>



<Switch>

<App exact path="/" />


{localStorage.data ?  <Recipes path="/recipes/:id" /> : '' 
 }
<Redirect to ="/" />
</Switch>

</Suspense>

</BrowserRouter>

</div>
	)


}



}


export default Router;
