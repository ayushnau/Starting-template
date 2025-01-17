import React from "react";

const SchoolIcon = ({ color = "#646464" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<g clipPath="url(#clip0_4265_10929)">
				<path
					fill={color}
					d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_4265_10929">
					<path fill="#fff" d="M0 0H24V24H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};

export default SchoolIcon;
