import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";

//create your first component
export function Home() {
	return (
		<div className="Home">
			<Navbar />
			<Jumbotron />
		</div>
	);
}
