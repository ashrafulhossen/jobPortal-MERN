import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Lottie from "react-lottie";
import findJob from "/bannerAnimation.json";


const LottieAnimation = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: findJob,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return <Lottie options={defaultOptions} />;
};

LottieAnimation.propTypes = {
	animationData: PropTypes.any.isRequired
};

export default LottieAnimation;
