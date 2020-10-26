import React from "react";
import classes from "../../styles/video.module.scss";

export const BackgroundVideo = () => {
	const videoSource =
		"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/48byXia/videoblocks-relaxing-and-mesmerizing-jelly-fish-swimming-in-water-4k_b2gec_joje__b068a0e54aec5207dfed3ef4311e238e__P360.mp4";
	return (
		<div className={classes.Container}>
			<video
				autoPlay="autoplay"
				loop="loop"
				muted
				className={classes.Video}>
				<source src={videoSource} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};
