import React from "react";
import mobile from "../assets/mobile.svg";
import mobileDesktop from "../assets/mobile-desktop.svg";
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import database from "../assets/database.svg";
import devOps from "../assets/devOps.svg";
import cloud from "../assets/cloud.svg";
import others from "../assets/others.svg";
import soft from "../assets/soft.svg";
import SkillCard from "./SkillCard";

export default function About({ width }) {
	return (
		<section id="about" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "#ddd" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4" style={{ fontWeight: 900 }}>
						ABOUT ME
					</h2>
					<div className="px-sm-2 px-lg-5">
						<small className="font-weight-bold ">
							I am software engineer excelling across the board in gathering requirements, designing, developing,
							testing, deploying, maintaining, and collaborating effectively with cross-functional teams to deliver
							high-quality software solutions. I Specialize in full-stack development, particularly adept with{" "}
							<strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Nest.js</strong> <strong>React</strong>,
							and the <strong>MERN stack</strong>. 🚀
						</small>
					</div>
				</div>

				{/* <div className="row justify-content-center">
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
												<span className="fw-bold">JavaScript</span> were fun learning from the HTML, CSS and JavaScript
												Head First books by O'Reilly Media . It was easier for me to pick up on th coming from Java
												which was a tougher language.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												I then moved to learn frontend web developement frameworks:{" "}
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
												As I worked on side projects, and projects on which I had to collaborate in on the same code
												base with other developers, <span className="fw-bold">Docker</span> has become more second
												nature for containarising apps. Also I use
												<span className="fw-bold">Git&Github</span> on a daily bases for source control.
											</p>
										</div>
										<div className="d-flex">
											<h4 className="pe-3">
												<span class="material-symbols-outlined">network_intelligence_history</span>
											</h4>
											<p>
												In my recent position as a software developer intern at LimitLess Tech, once more I had to
												exercise my muscle of adaption by getting versed with the problem at hand, then collaborating
												with other developers as the leading dev for the web version of their cryptocurrency exchange
												web client. In addition to working on the frontend of their cryptocurrency exchange web
												application, I had take charge of setting up and managing their DevOps and Cloud infrastructure
												with <span className="fw-bold">Google Cloud Platform</span>. Working with the
												<span className="fw-bold">Cloud build</span>, <span className="fw-bold">GCR</span> and{" "}
												<span className="fw-bold">Cloud Run</span> GCP services.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
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
							<SkillCard
								image={others}
								category={"Languages, Dev & Testing Tools"}
								row1Items={["JavaScript", "TypeScript", "Java", "C"]}
								row1Spacing={"between"}
								row2Items={["Git", "GitHub", "Docker"]}
								row2Spacing={"between"}
								row3Items={["Jest", "Cypress"]}
								row3Spacing={"around"}
								// row3Items={["Docker", "Kubernetes", "GCP", "Firebase"]}
								// row3Spacing={"between"}
							/>
							<SkillCard
								image={mobileDesktop}
								category={"Front, Back, Mobile & Desktop Dev"}
								row1Items={["HTML", "CSS", "SASS", "React", "Angular"]}
								row1Spacing={"between"}
								scaleDownRow2={width < 390 ? true : false}
								row2Items={["Node.js", "Express.js", "NestJS", "Firebase", "Spring boot"]}
								row2Spacing={"between"}
								scaleDownRow3={width < 390 ? true : false}
								row3Items={["React Native", "Flutter", "Electron.js", "JavaFX"]}
								row3Spacing={"between"}
								// row3Items={["Angular", "Angular material", "Bootstrap", "Tailwind CSS"]}
								// row3Spacing={"between"}
							/>
							<SkillCard
								image={backend}
								category={"Databases & Cloud providers"}
								row1Items={["MongoDB", "PostgreSQL", "MySQL"]}
								row1Spacing={"between"}
								row2Items={["GCP", "AWS"]}
								row2Spacing={"around"}
							/>
							<SkillCard
								image={frontend}
								category={"More technologies and patterns"}
								row1Items={["REST API", "Microservices", "Event-Driven"]}
								row1Spacing={"between"}
								row2Items={["WebSockets", "Apache Kafka"]}
								row2Spacing={"around"}
							/>

							{/* <SkillCard
								image={devOps}
								category={"DevOps"}
								row1Items={["Git", "GitHub"]}
								row1Spacing={"around"}
								row2Items={["Docker", "GitHub actions"]}
								row2Spacing={"around"}
							/>
							<SkillCard
								image={cloud}
								category={"Cloud"}
								row1Items={["Google cloud platform"]}
								row1Spacing={"center"}
								row2Items={["GCR", "Cloud build", "Cloud run"]}
								row2Spacing={"around"}
							/>
							<SkillCard
								image={others}
								category={"More"}
								theMoreCard={true}
								rowsOfMoreCard={[
									{ item: "Jira", description: "Project management & collaboration" },
									{ item: "Cypress", description: "Application testing" },
									{ item: "Firebase", description: "Backend as a service" },
								]}
							/>
							<SkillCard
								image={soft}
								category={"More than technical"}
								row1Items={["Effective Communication", "Problem Solving"]}
								row1Spacing={"between"}
								row2Items={["Team Collaboration", "Adaptability"]}
								row2Spacing={"between"}
								row3Items={["Continuous Learning", "Time Management"]}
								row3Spacing={"between"}
							/> */}
							{/* <SkillCard emptyCard={true} /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
