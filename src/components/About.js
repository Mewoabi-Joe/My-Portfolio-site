import React from "react";
import mobile from "../assets/mobile.svg";
import desktop from "../assets/desktop.svg";
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import database from "../assets/database.svg";

export default function About() {
	const skills = [
		{
			image: database,
			title: "Databases",
			items: [" * Mongo db", "    * Mysql"],
		},
		{
			image: backend,
			title: "Back-end",
			items: [" * Node js"],
			// , "Django rest"
		},

		{
			image: mobile,
			title: "Mobile",
			items: [" *React Native"],
		},
		// {
		// 	image: desktop,
		// 	title: "Desktop",
		// 	items: ["Java FX", "Scene builder"],
		// },
	];

	return (
		<section id="about" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "#ddd" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4 fw-bold">ABOUT ME</h2>
					<small>I enjoy learning, applying and seeing results</small>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-12 col-lg-9">
						<div className="accordion" id="accordionPanelsStayOpenExample">
							<div className="accordion-item" style={{ borderRadius: "2rem" }}>
								<h2 className="accordion-header" id="panelsStayOpen-headingOne">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#panelsStayOpen-collapseOne"
										aria-expanded="true"
										aria-controls="panelsStayOpen-collapseOne"
										style={{ borderRadius: "2rem" }}
									>
										<h4>My story</h4>
									</button>
								</h2>
								<div
									id="panelsStayOpen-collapseOne"
									className="accordion-collapse collapse "
									aria-labelledby="panelsStayOpen-headingOne"
								>
									<div className="accordion-body">
										<div className="d-flex">
											<h4>
												<i className="bi bi-reception-0 w-20 me-3"></i>
											</h4>
											<p>
												My love for coding started with C-programming as I experimented with basic programming concepts.
											</p>
										</div>
										<div className="d-flex">
											<h4>
												<i className="bi bi-reception-1 me-3"></i>{" "}
											</h4>
											<p>
												Next was Java-programming where I learned Object-Oriented programming and worked with Mysql,
												Java FX and Scene Builder for desktop app developement.
											</p>
										</div>
										<div className="d-flex">
											<h4>
												<i className="bi bi-reception-2 me-3"></i>
											</h4>
											<p>
												I then made a transition to the WEB, which was much fun, Started basic HTML, CSS and JavaScript.
											</p>
										</div>
										<div className="d-flex">
											<h4>
												<i className="bi bi-reception-3 me-3"></i>
											</h4>
											<p>
												Then I learned different frameworks for both back and frontend among which we have: React, Node
												js, Boostrap, Material UI, Angular and Django-rest.
											</p>
										</div>
										<div className="d-flex">
											<h4>
												<i className="bi bi-reception-4 me-3"></i>
											</h4>
											<p>
												I am currently having much fun with react and as a result I learnt React native, and continue
												build more applications centered around the react ecosystem.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-12 col-lg-9">
						<h4 className="ps-3 mt-5 mb-3">My skills</h4>
					</div>
				</div>
				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-9 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-start justify-content-center  ">
							<div className=" card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={frontend}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Front-end</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-between"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span> * React</span>
										<span>Angular</span>
									</li>
									<li
										className="list-group-item d-flex justify-content-between"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>* Material UI</span>
										<span> Boostrap</span>
									</li>
								</ul>
							</div>
							{skills.map((skill, index) => (
								<div className=" card border border-secondary" style={{ borderRadius: "1.5rem" }} key={index}>
									<img
										src={skill.image}
										className="card-img-top img-fluid border border-light"
										alt=""
										style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
									/>
									<div className="card-body">
										<h5 className="card-title text-center">{skill.title}</h5>
									</div>
									<ul className="list-group list-group-flush">
										{skill.items.map((item, ind) => (
											<li
												className="list-group-item"
												key={ind}
												style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
