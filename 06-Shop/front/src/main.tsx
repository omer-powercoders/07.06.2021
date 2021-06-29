import * as React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import {ProductsList} from "./components/ProductsList";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const App = () => <HashRouter>
	<Switch> 
	<Route path="/product">Products</Route>
	<Route path="/"><ProductsList/></Route>

	
	</Switch>
</HashRouter>;

ReactDOM.render(<App />, appDiv);
