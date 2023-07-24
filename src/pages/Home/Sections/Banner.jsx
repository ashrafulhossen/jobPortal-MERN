// eslint-disable-next-line no-unused-vars
import React from "react";
import Lottie from "react-lottie";
import findJob from "./../../../../public/Home/bannerAnimation.json";

const Banner = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: findJob,
	};

	return (
		<section className="bg-green-100 py-4">
			<div className="max-w-7xl mx-auto rounded-xl overflow-hidden">
				<div className="hero min-h-screen bg-green-200 px-8">
					<div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie options={defaultOptions} />
						<div>
							<h1 className="text-4xl sm:text-5xl font-bold text-primary">
								Find Your Dream Job
							</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
							</p>
							<button className="btn bg-primary hover:bg-primary hover:scale-110 text-white border-transparent hover:border-transparent">
								Find Job
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
