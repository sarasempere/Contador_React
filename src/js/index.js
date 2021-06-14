//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/secondsCounter.js";

//render your react application

let counter = 0;

function Count() {
	counter++;
	//console.log(counter, "counter");
	ReactDOM.render(
		<div id="main">
			<Counter seconds={counter} />
			<button
				type="button"
				className="btn btn-light"
				id="reset"
				onClick={() => {
					counter = 0;
				}}>
				Reset
			</button>
		</div>,
		document.querySelector("#app")
	);
}

setInterval(Count, 1000);
