import React, { useState } from "react";
import { BackgroundVideo } from "./backgroundVideo";

const tagline = {
	title: "Snorkel SoFLo",
	text: "Your adventure awaits",
	button: {
		firstlabel: "From The Beach ",
		firsturl: "",
		secondlabel: "From A Boat",
		secondurl: "",
		thirdlabel: "With Sharks",
		thirdurl: ""
	}
};

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron  bg-dark">
				<BackgroundVideo />
				<h1 className="jumbo-title text-white ">{tagline.title}</h1>
				<p className="jumbo-text lead text-white">{tagline.text}</p>
				<div className="threebuttons">
					<a
						className=" button-beach btn btn-lg btn bg-transparent border border-white text-white"
						href={tagline.button.firsturl}
						role="button">
						{tagline.button.firstlabel}
					</a>

					<a
						className=" button-boat btn  btn-lg btn bg-transparent border border-white text-white"
						href={tagline.button.secondurl}
						role="button">
						{tagline.button.secondlabel}
					</a>
					<a
						className=" button-sharks btn  btn-lg btn bg-transparent border border-white text-white"
						href={tagline.button.thirdurl}
						role="button">
						{tagline.button.thirdlabel}
					</a>
				</div>
			</div>
		</>
	);
};
