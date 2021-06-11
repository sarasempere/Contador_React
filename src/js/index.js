//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Counter } from "./component/secondsCounter.js";

//render your react application

let counter = 0;

function Count() {
	counter++;
	//console.log(counter, "counter");
	ReactDOM.render(
		<div>
			<Counter seconds={counter} />
		</div>,
		document.querySelector("#app")
	);
}

setInterval(Count, 1000);
