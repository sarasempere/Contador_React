import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	let arr = Array.from(props.seconds.toString());
	console.log(arr);

	let newArr = [];
	function prueba() {
		for (let i = 0; i < 10; i++) {
			if (i < arr.length) {
				newArr.push(
					<li className="nav-item col-6 col-md-auto">{arr[i]}</li>
				);
			} else {
				newArr.unshift(
					<li className="nav-item col-6 col-md-auto">{0}</li>
				);
			}
		}
		console.log(newArr);
	}
	prueba();
	return (
		<ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
			{newArr}
		</ul>
	);
}

Counter.propTypes = {
	seconds: PropTypes.number
};
