import React, { useState } from "react";

const tagline = {
	title: "Discover Miami",
	text: "What are you waiting for?",
	button: {
		firstlabel: "Get Started",
		secondlabel: "Watch Trailer"
	}
};

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron  bg-dark">
				<h1 className="jumbo-title display-4 d-flex justify-content-center">
					{tagline.title}
				</h1>
				<p className="jumbo-text lead d-flex justify-content-center">
					{tagline.text}
				</p>
				<a
					className=" button-start btn btn-lg btn bg-transparent "
					href="#"
					role="button">
					{tagline.button.firstlabel}
				</a>

				<a
					className=" button-trailer btn  btn-lg btn bg-transparent "
					href="#"
					role="button">
					{tagline.button.secondlabel}
					<i className="far fa-play-circle pl-2" />
				</a>
			</div>
		</>
	);
};
