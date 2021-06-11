import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	let arr = Array.from(props.seconds.toString());
	console.log(arr);

	let hola = arr.map((x, i) => {
		return (
			<li key={i} className="list-group-item">
				{x}
			</li>
		);
	});

	return <ul className="list-group m-5">{hola}</ul>;
}

Counter.propTypes = {
	seconds: PropTypes.number
};
