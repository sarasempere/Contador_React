import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div>
			<p>{props.seconds}</p>
		</div>
	);
}
