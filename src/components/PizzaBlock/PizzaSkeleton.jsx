import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={260}
		height={466.4}
		viewBox="0 0 260 466.4"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<circle cx="130" cy="130" r="130" />
		<rect x="11" y="312" rx="10" ry="10" width="244" height="88" />
		<rect x="120" y="408" rx="20" ry="20" width="129" height="45" />
		<rect x="15" y="416" rx="10" ry="10" width="91" height="27" />
		<rect x="11" y="275" rx="10" ry="10" width="244" height="28" />
	</ContentLoader>
);

export default Skeleton;
