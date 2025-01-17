import React from "react";

export interface RefreshIconInterface {
	className?: string;
}

const RefreshIcon: React.FC<RefreshIconInterface> = ({ className = "" }) => {
	return (
		<svg
			className={className}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2657_13603)">
				<path
					d="M14.7085 5.29171C13.5001 4.08337 11.8418 3.33337 10.0001 3.33337C6.3168 3.33337 3.3418 6.31671 3.3418 10C3.3418 13.6834 6.3168 16.6667 10.0001 16.6667C13.1085 16.6667 15.7001 14.5417 16.4418 11.6667H14.7085C14.0251 13.6084 12.1751 15 10.0001 15C7.2418 15 5.00013 12.7584 5.00013 10C5.00013 7.24171 7.2418 5.00004 10.0001 5.00004C11.3835 5.00004 12.6168 5.57504 13.5168 6.48337L10.8335 9.16671H16.6668V3.33337L14.7085 5.29171Z"
					fill="#2176FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2657_13603">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default RefreshIcon;
