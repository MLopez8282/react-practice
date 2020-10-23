import React, { useState } from "react";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar-color navbar navbar-expand-lg navbar-light bg-white  ">
				<a className="navbar-brand" href="#">
					<img
						className="navbar-image"
						src="../img/travel-logo.png"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse d-flex justify-content-end mr-2 pr-5"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-text nav-link active pl-2 mr-3 text-info "
							href="#">
							Home <span class="sr-only">(current)</span>
						</a>
						<a
							className="nav-text nav-link pl-2 mr-3 text-info"
							href="#">
							Tours
						</a>
						<a
							className="nav-text nav-link pl-2 mr-3 text-info"
							href="#">
							Local Spots
						</a>
						<a
							className="nav-text nav-link pl-2 mr-3 text-info"
							href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
