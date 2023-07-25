import React from "react";
import mobile from "../assets/mobile.svg";
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import database from "../assets/database.svg";
import devOps from "../assets/devOps.svg";
import cloud from "../assets/cloud.svg";
import others from "../assets/others.svg";

export default function About() {
	return (
		<section id="about" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "#ddd" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4" style={{ fontWeight: 900 }}>
						ABOUT ME
					</h2>
					<small>I love software development</small>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-12 col-lg-11">
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
										<h4 style={{ fontWeight: 700 }}>
											My story
											{/* <span
												class="material-symbols-outlined"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												data-bs-title="This is just my dev"
											>
												lightbulb
											</span> */}
										</h4>
									</button>
								</h2>
								<div
									id="panelsStayOpen-collapseOne"
									className="accordion-collapse collapse "
									aria-labelledby="panelsStayOpen-headingOne"
								>
									<div className="accordion-body">
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												My love for coding started in secondary school as I experimented with basic programming concepts
												with <span className="fw-bold">C</span> as my first programming language.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												Afterwards I picked up <span className="fw-bold">Java</span>, I learned Object-Oriented
												programming and worked with <span className="fw-bold">Mysql</span>, Java FX and Scene Builder
												for desktop app developement.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												Web developement basics <span className="fw-bold">HTML, CSS</span> and{" "}
												<span className="fw-bold">JavaScript</span> was fun learning from the HTML, CSS and JavaScript
												Head First books by O'Reilly Media .
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												Then I moved to learn frontend web developement frameworks:{" "}
												<span className="fw-bold">React</span> and <span className="fw-bold">Angular.</span> React was
												much fun and easy to develop with compared to angular because it did'nt force me to use
												typescript and did'nt have as many new concepts to master like angular did, it was more
												intuitive(Afterall it is a library not a framework). After working with angular on some projects
												I came to understand that its strict rules are also very useful for big teams since it ensures
												they follow universally known strict principles.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												After much work with Angular, I started seeing the benefits of some powerful coding principles
												like using <span className="fw-bold">typescript</span> I fell in love with it and wondered how
												on earth I'd been surviving with out it.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												As I used frontend Javascript frameworks, I used CSS frameworks in conjunction.
												<span className="fw-bold"> Boostrap</span>,<span className="fw-bold"> Material UI</span> and{" "}
												<span className="fw-bold">Angular material</span> were of great help to me for styling my UI's
												and boosting my productivity.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												I also learnt backend frameworks: <span className="fw-bold">Node js</span> and{" "}
												<span className="fw-bold">Spring boot</span>, and used them in my projects for developing REST
												APIs. Alongside databases <span className="fw-bold">Mongo DB</span>,{" "}
												<span className="fw-bold">MySQL</span> and <span className="fw-bold">Cassandra</span> for which
												I had to do some prior modelling to ensure they efficiently support the needs of my
												applications.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												When working on some of my hobby projects, I also experimented with some backend as a service
												like <span className="fw-bold">firebase</span> and saw how powerful they are aswell, also learnt
												how to deploy some hobby(static sites, frontend and backend) projects to different platforms
												which gave me more insight in how the whole ecosystem plays together.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												As a developer who loved react for web, my mobile app developement journey naturally started
												with <span className="fw-bold">react native</span>, I tried{" "}
												<span className="fw-bold">flutter</span> aswell due to the comments on it and was surprised at
												how much I came to love it.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												Things are only getting more and more interesting as <span className="fw-bold">AI</span> comes
												in to make us more efficient. I've also be working of recent with some DevOps and Cloud
												technologies. <span className="fw-bold"> Docker</span> being my main way to containarise apps,
												as usual <span className="fw-bold">Git&Github</span> for SCM, some work with Github actions. For
												cloud provides, <span className="fw-bold">GCP</span> is the one I've been working with of
												recent, and have used its <span className="fw-bold">Cloud build</span>,{" "}
												<span className="fw-bold">GCR</span> and <span className="fw-bold">Cloud Run</span> services
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <span
					class="material-symbols-outlined"
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-title="Tooltip on top"
				>
					lightbulb
				</span>
				<button
					type="button"
					class="btn btn-secondary"
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-title="Tooltip on top"
				>
					Tooltip on top
				</button> */}
				<div className="row justify-content-center">
					<div className="col-md-12 col-lg-11">
						<h4 className="ps-3 mt-5 mb-3" style={{ fontWeight: 700 }}>
							My skills
							{/* <span
								class="material-symbols-outlined"
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								data-bs-title="I'll not mention tools like Jira, Slack, Postman ... here, I'll just focus on technologies and frameworks"
							>
								lightbulb
							</span> */}
						</h4>
					</div>
				</div>
				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-start justify-content-center  ">
							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={frontend}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">Front-end</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-around"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>HTML</span>
										<span>CSS</span>
										<span>JavaScript</span>
									</li>
									<li
										className="list-group-item d-flex justify-content-around"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>React</span>
										<span>Angular</span>
									</li>
								</ul>
							</div>

							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={backend}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">Back-end</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Node js</span>
									</li>
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Spring boot</span>
									</li>
								</ul>
							</div>
							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={database}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">Databases</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-between"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Mongo DB</span>
										<span>MySQL</span>
									</li>
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Cassandra</span>
									</li>
								</ul>
							</div>

							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={mobile}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">Mobile</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Flutter</span>
									</li>
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>React native</span>
									</li>
								</ul>
							</div>
							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={devOps}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">DevOps</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-around"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Git</span>
										<span>Github</span>
									</li>

									<li
										className="list-group-item d-flex justify-content-around"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Docker</span>
										<span>Github actions</span>
									</li>
								</ul>
							</div>
							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={cloud}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">Cloud</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Google cloud platform</span>
									</li>

									<li
										className="list-group-item d-flex justify-content-around"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>GCR</span>
										<span>Cloud build</span>
										<span>Cloud run</span>
									</li>
								</ul>
							</div>
							<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
								<img
									src={others}
									className="card-img-top img-fluid border border-light"
									alt=""
									style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-bold">More</h5>
								</div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Jira</span>
										<small style={{ fontSize: "0.7rem" }} className="d-flex align-items-center f  ms-1">
											: Project management & collaboration
										</small>
									</li>

									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Cypress</span>
										<small style={{ fontSize: "0.7rem" }} className="d-flex align-items-center ms-1">
											: Application testing
										</small>
									</li>
									<li
										className="list-group-item d-flex justify-content-center"
										style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
									>
										<span>Firebase </span>
										<small style={{ fontSize: "0.7rem" }} className="d-flex align-items-center ms-1">
											: Backend as a service
										</small>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
