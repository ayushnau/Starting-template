import React from "react";

function WiredUpLogo(props: any) {
	return (
		<svg
			className={props.className}
			width="100"
			height="25"
			viewBox="0 0 100 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.1605 18.8623L28.5413 6.21375H31.4626L33.5563 15.0022H33.6613L35.9711 6.21375H38.4724L40.776 15.0208H40.8872L42.9809 6.21375H45.9021L42.283 18.8623H39.6767L37.2681 10.5925H37.1692L34.7668 18.8623H32.1605Z"
				fill="#212121"
			/>
			<path
				d="M46.9362 18.8623V9.37587H49.5672V18.8623H46.9362ZM48.2579 8.15302C47.8667 8.15302 47.5312 8.02332 47.2512 7.76393C46.9753 7.50042 46.8374 7.18544 46.8374 6.819C46.8374 6.45667 46.9753 6.14581 47.2512 5.88642C47.5312 5.62291 47.8667 5.49115 48.2579 5.49115C48.649 5.49115 48.9825 5.62291 49.2584 5.88642C49.5384 6.14581 49.6784 6.45667 49.6784 6.819C49.6784 7.18544 49.5384 7.50042 49.2584 7.76393C48.9825 8.02332 48.649 8.15302 48.2579 8.15302Z"
				fill="#212121"
			/>
			<path
				d="M51.3269 18.8623V9.37587H53.8776V11.031H53.9764C54.1494 10.4423 54.4396 9.99759 54.8473 9.69703C55.2549 9.39234 55.7243 9.24 56.2554 9.24C56.3871 9.24 56.5292 9.24823 56.6815 9.2647C56.8339 9.28117 56.9677 9.30382 57.083 9.33264V11.6672C56.9595 11.6301 56.7886 11.5972 56.5704 11.5684C56.3521 11.5395 56.1525 11.5251 55.9713 11.5251C55.5843 11.5251 55.2384 11.6095 54.9337 11.7783C54.6332 11.943 54.3943 12.1736 54.2173 12.4701C54.0444 12.7665 53.9579 13.1083 53.9579 13.4953V18.8623H51.3269Z"
				fill="#212121"
			/>
			<path
				d="M61.9771 19.0475C61.0012 19.0475 60.1613 18.8499 59.4572 18.4546C58.7573 18.0552 58.2179 17.4912 57.8391 16.7624C57.4603 16.0295 57.2709 15.1628 57.2709 14.1623C57.2709 13.1865 57.4603 12.3301 57.8391 11.5931C58.2179 10.8561 58.7511 10.2817 59.4387 9.86995C60.1304 9.45822 60.9415 9.25235 61.8721 9.25235C62.4979 9.25235 63.0805 9.35323 63.6199 9.55498C64.1634 9.75261 64.6369 10.0511 65.0404 10.4505C65.448 10.8499 65.765 11.3522 65.9915 11.9575C66.2179 12.5586 66.3312 13.2627 66.3312 14.0697V14.7922H58.3208V13.1618H63.8546C63.8546 12.783 63.7722 12.4474 63.6075 12.1551C63.4428 11.8628 63.2143 11.6342 62.922 11.4695C62.6338 11.3007 62.2982 11.2163 61.9153 11.2163C61.5159 11.2163 61.1618 11.309 60.853 11.4942C60.5483 11.6754 60.3095 11.9204 60.1366 12.2292C59.9637 12.5339 59.8751 12.8736 59.871 13.2482V14.7984C59.871 15.2678 59.9575 15.6734 60.1304 16.0151C60.3075 16.3568 60.5566 16.6204 60.8777 16.8056C61.1989 16.9909 61.5797 17.0836 62.0203 17.0836C62.3126 17.0836 62.5802 17.0424 62.8232 16.96C63.0661 16.8777 63.274 16.7542 63.4469 16.5895C63.6199 16.4248 63.7516 16.223 63.8422 15.9842L66.2756 16.1448C66.152 16.7295 65.8988 17.24 65.5159 17.6765C65.1371 18.1088 64.6472 18.4464 64.046 18.6893C63.449 18.9281 62.7593 19.0475 61.9771 19.0475Z"
				fill="#212121"
			/>
			<path
				d="M71.1959 19.0167C70.4753 19.0167 69.8228 18.8314 69.2381 18.4608C68.6575 18.0861 68.1964 17.5365 67.8547 16.8118C67.517 16.083 67.3482 15.1896 67.3482 14.1314C67.3482 13.0444 67.5232 12.1407 67.8732 11.4201C68.2232 10.6955 68.6884 10.1541 69.269 9.79584C69.8536 9.43352 70.4939 9.25235 71.1897 9.25235C71.7208 9.25235 72.1635 9.34293 72.5176 9.5241C72.8758 9.70114 73.164 9.92348 73.3822 10.1911C73.6045 10.4546 73.7733 10.714 73.8886 10.9693H73.9689V6.21375H76.5937V18.8623H73.9998V17.3429H73.8886C73.7651 17.6065 73.5901 17.8679 73.3637 18.1273C73.1413 18.3826 72.8511 18.5946 72.4929 18.7634C72.1388 18.9322 71.7064 19.0167 71.1959 19.0167ZM72.0297 16.923C72.4537 16.923 72.8119 16.8077 73.1043 16.5771C73.4007 16.3424 73.6272 16.0151 73.7836 15.5951C73.9442 15.1752 74.0245 14.6831 74.0245 14.1191C74.0245 13.555 73.9463 13.065 73.7898 12.6492C73.6334 12.2333 73.4069 11.9122 73.1105 11.6857C72.814 11.4593 72.4537 11.346 72.0297 11.346C71.5973 11.346 71.2329 11.4634 70.9365 11.6981C70.64 11.9327 70.4156 12.258 70.2633 12.6739C70.111 13.0897 70.0348 13.5715 70.0348 14.1191C70.0348 14.6708 70.111 15.1587 70.2633 15.5828C70.4198 16.0027 70.6442 16.3321 70.9365 16.5709C71.2329 16.8056 71.5973 16.923 72.0297 16.923Z"
				fill="#212121"
			/>
			<path
				d="M86.2711 6.21375H88.9454V14.4279C88.9454 15.3501 88.7251 16.1572 88.2845 16.8489C87.8481 17.5406 87.2367 18.08 86.4502 18.467C85.6638 18.8499 84.7477 19.0414 83.7019 19.0414C82.652 19.0414 81.7338 18.8499 80.9474 18.467C80.161 18.08 79.5496 17.5406 79.1131 16.8489C78.6767 16.1572 78.4585 15.3501 78.4585 14.4279V6.21375H81.1327V14.1994C81.1327 14.6811 81.2377 15.1093 81.4477 15.484C81.6618 15.8586 81.9623 16.153 82.3494 16.3671C82.7364 16.5812 83.1872 16.6883 83.7019 16.6883C84.2207 16.6883 84.6716 16.5812 85.0545 16.3671C85.4415 16.153 85.74 15.8586 85.95 15.484C86.1641 15.1093 86.2711 14.6811 86.2711 14.1994V6.21375Z"
				fill="#212121"
			/>
			<path
				d="M90.7483 22.4196V9.37587H93.3423V10.9693H93.4596C93.5749 10.714 93.7416 10.4546 93.9599 10.1911C94.1822 9.92348 94.4704 9.70114 94.8245 9.5241C95.1827 9.34293 95.6274 9.25235 96.1585 9.25235C96.8503 9.25235 97.4884 9.43352 98.0731 9.79584C98.6578 10.1541 99.1251 10.6955 99.4751 11.4201C99.825 12.1407 100 13.0444 100 14.1314C100 15.1896 99.8292 16.083 99.4874 16.8118C99.1498 17.5365 98.6886 18.0861 98.104 18.4608C97.5234 18.8314 96.8729 19.0167 96.1524 19.0167C95.6418 19.0167 95.2074 18.9322 94.8492 18.7634C94.4951 18.5946 94.2048 18.3826 93.9784 18.1273C93.7519 17.8679 93.579 17.6065 93.4596 17.3429H93.3793V22.4196H90.7483ZM93.3237 14.1191C93.3237 14.6831 93.402 15.1752 93.5584 15.5951C93.7149 16.0151 93.9413 16.3424 94.2378 16.5771C94.5342 16.8077 94.8945 16.923 95.3186 16.923C95.7468 16.923 96.1091 16.8056 96.4056 16.5709C96.702 16.3321 96.9264 16.0027 97.0788 15.5828C97.2352 15.1587 97.3135 14.6708 97.3135 14.1191C97.3135 13.5715 97.2373 13.0897 97.0849 12.6739C96.9326 12.258 96.7082 11.9327 96.4118 11.6981C96.1153 11.4634 95.7509 11.346 95.3186 11.346C94.8904 11.346 94.5281 11.4593 94.2316 11.6857C93.9393 11.9122 93.7149 12.2333 93.5584 12.6492C93.402 13.065 93.3237 13.555 93.3237 14.1191Z"
				fill="#212121"
			/>
			<circle cx="12.1806" cy="12.1806" r="12.1806" fill="#2176FF" />
			<path
				d="M5.02028 11.9054L8.18587 11.9054L8.94273 13.9011L7.38465 16.7914L5.02028 11.9054Z"
				fill="#D3E4FF"
			/>
			<path
				d="M9.69363 9.7024L12.8673 9.70248L10.5962 16.7872L7.39625 16.7872L9.69363 9.7024Z"
				fill="white"
			/>
			<path
				d="M9.69638 9.70614L12.862 9.70614L14.9996 15.2776L13.4415 18.1679L9.69638 9.70614Z"
				fill="#D3E4FF"
			/>
			<path
				d="M16.5706 6.89008L19.813 6.89005L16.6474 18.1619L13.4475 18.1619L16.5706 6.89008Z"
				fill="white"
			/>
		</svg>
	);
}

export default WiredUpLogo;