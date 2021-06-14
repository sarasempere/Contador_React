import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export function Counter(props) {
	let arr = Array.from(props.seconds.toString());

	let newArr = [];
	function prueba() {
		for (let i = 0; i < 10; i++) {
			if (i < arr.length) {
				newArr.push(
					<div className="col-md-auto ppal">
						<p>{arr[i]}</p>
					</div>
				);
			} else {
				newArr.unshift(
					<div className="col-md-auto ppal">
						<p>{0}</p>
					</div>
				);
			}
		}
	}
	prueba();
	return (
		<div className="row justify-content-center">
			<FontAwesomeIcon
				icon={faClock}
				style={{ color: "white", fontSize: "6rem" }}
			/>
			{newArr}
		</div>
	);
}

Counter.propTypes = {
	seconds: PropTypes.number
};
