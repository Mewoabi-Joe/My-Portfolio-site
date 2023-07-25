import React from "react";
import photo from "../assets/avatarIcon.png";

export default function Navbar() {
	return (
		<nav
			id="my-navbar"
			style={{ backgroundColor: "var(--medium)" }}
			className="navbar navbar-expand-lg fixed-top navbar-light  "
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src={photo}
						alt=""
						width="32rem"
						style={{ borderRadius: "16rem", marginRight: "2rem", backgroundColor: "white" }}
					/>
					Mewoabi Joe
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="nav-link  " href="#home">
							Home
						</a>
						<a className="nav-link" href="#about">
							About
						</a>
						<a className="nav-link" href="#projects">
							Projects
						</a>
						<a className="nav-link" href="#contact">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
