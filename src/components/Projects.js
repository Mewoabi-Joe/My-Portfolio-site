import React from "react";
import frontend from "../assets/frontend.svg";

const Projects = () => {
	return (
		<section id="projects" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "var(--darkest)" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4" style={{ fontWeight: 900, color: "var(--medium)" }}>
						MY PROJECTS
					</h2>
					<small style={{ color: "#bbb" }}>
						Some of my outstanding projects
						<span
							class="material-symbols-outlined"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title="Sorry I've not yet deployed these projects. I'll do that soon enough so that you can preview them by simply clicking on a link."
						>
							lightbulb
						</span>
					</small>
				</div>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://miro.medium.com/v2/resize:fit:1400/1*WQPnsa2Jlv12ZjbQHKUUBA.jpeg"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.4,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										CRYPTOCURRENCY EXCHANGE WEB CLIENT
									</h5>
									<div>
										<span className="badge    my-badge">Frontend</span>
										<span className="badge    my-badge">Angular</span>
										<span className="badge   my-badge">CI/CD</span>
										<span className="badge   my-badge">GCP</span>
										<span className="badge   my-badge">Cypress</span>
										<span className="badge   my-badge">Docker</span>
										<span className="badge   my-badge">ReST API</span>
										<span className="badge   my-badge">Internationalised</span>
										<span className="badge   my-badge">Responsive</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white", zIndex: 3 }}>
											Web client that permits users deposit, exchange and withdraw currencies
										</small>
									</div>
									<button type="button" class="btn btn-outline-light" disabled>
										Frontend code
									</button>
									<span
										class="material-symbols-outlined text-white"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="You can't view the source code of this project. It's private company code"
									>
										lightbulb
									</span>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGy5LZl0OImdEFnHZhEt0RwczU-qbSSCdrg&usqp=CAU"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.4,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										MEDICAL CLINIC WEB APP
									</h5>
									<div>
										<span className="badge    my-badge">Full-stack</span>
										<span className="badge   my-badge">React</span>
										<span className="badge   my-badge">Node js</span>
										<span className="badge   my-badge">Authentication</span>
										<span className="badge   my-badge">JWTs</span>
										<span className="badge   my-badge">Mongo DB</span>
										<span className="badge   my-badge">Rest API</span>
										<span className="badge   my-badge">Responsive</span>
										<span className="badge   my-badge">Payment processing</span>
										<span className="badge   my-badge">Protected routes</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											Patients can see the different lab tests, book and pay for lab tests and get notified when thier
											results are out.
										</small>
									</div>
									<button type="button" class="btn btn-outline-light btn-sm" disabled>
										Frontend code
									</button>
									<button type="button" class="btn btn-outline-light btn-sm ms-2" disabled>
										Backend code
									</button>
									<span
										class="material-symbols-outlined text-white"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="You can't view the source code of this project. It's a clients private code"
									>
										lightbulb
									</span>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://dig.abclocal.go.com/wtvd/WSI_Weather_maps/7dayMAX.jpg"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.4,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										WEATHER WEB CLIENT
									</h5>
									<div>
										<span className="badge    my-badge">Frontend</span>
										<span className="badge    my-badge">Angular</span>
										<span className="badge   my-badge">Responsive</span>
										<span className="badge   my-badge">Bootstrap</span>
										<span className="badge   my-badge">Rest API</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											Geo-locates app user, shows his current weather and forecast obtained from a ReST API. User can
											also search for weather information of any place around the world.
										</small>
									</div>
									<a
										href="https://github.com/Mewoabi-Joe/Go-groups-task-1-angular"
										target="_blank"
										class="btn btn-light  active-btn  "
									>
										Frontend code
									</a>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl50253632876-public-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fc1ed7e65817efe6d2f3e8fd2b4ea78f"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.4,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										STORE INVENTORY MANAGEMENT WEB SERVICE
									</h5>
									<div>
										<span className="badge    my-badge">Backend</span>
										<span className="badge   my-badge">Spring boot</span>
										<span className="badge   my-badge">MySQL</span>
										<span className="badge   my-badge">Microservices</span>
										<span className="badge   my-badge">ReST API</span>
										<span className="badge   my-badge">Spring Security</span>
										<span className="badge   my-badge">JWTs</span>
										<span className="badge   my-badge">API Gateway</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											Exposes a ReST API for managing store inventory. Exposes endpoints for user management and
											authentication, crud operations on store and product resource, with filtering and search queries
											supported. Built using a microservice architecture
										</small>
									</div>
									<a
										href="https://github.com/Mewoabi-Joe/Go-groups-task-3-microservices-in-communication-for-warehouse-management"
										target="_blank"
										class="btn btn-light  active-btn  "
									>
										Backend code
									</a>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://androidpowerhub.com/wp-content/uploads/2017/06/Galaxy-Note-5-text-messaging-problems.jpg"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.5,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										SIMPLE MESSAGING WEB APP
									</h5>
									<div>
										<span className="badge    my-badge">Full-stack</span>
										<span className="badge   my-badge">Angular</span>
										<span className="badge   my-badge">Node js</span>
										<span className="badge   my-badge">Mongo DB</span>
										<span className="badge   my-badge">ReST API</span>
										<span className="badge   my-badge">JWTs</span>
										<span className="badge   my-badge">Authentication</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>web app for sending messages to your registered contacts</small>
									</div>
									<a
										href="https://github.com/Mewoabi-Joe/Full-stack-NodeJs-Angular-SMS-APP/tree/main/Angular-frontend"
										target="_blank"
										class="btn btn-light  active-btn btn-sm "
									>
										Frontend code
									</a>
									<a
										href=" https://github.com/Mewoabi-Joe/Full-stack-NodeJs-Angular-SMS-APP/tree/main/Node-backend"
										target="_blank"
										class="btn btn-light  active-btn btn-sm ms-2"
									>
										Backend code
									</a>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.5,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										FUND MANAGEMENT APP
									</h5>
									<div>
										<span className="badge    my-badge">Mobile</span>
										<span className="badge    my-badge">Full-stack</span>
										<span className="badge   my-badge">React native</span>
										<span className="badge   my-badge">Django ReST</span>
										<span className="badge   my-badge">MySQL</span>
										<span className="badge   my-badge">ReST API</span>
										<span className="badge   my-badge">JWTs</span>
										<span className="badge   my-badge">Authentication</span>
										<span className="badge   my-badge">Fintech</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											App for management of the funds of individuals who belong to a group. An admin manages the users
											and users can deposit, borrow, save, contribute money aswell as ask for financial help.
										</small>
									</div>
									<button target="_blank" class="btn btn-outline-light btn-sm " disabled>
										Frontend code
									</button>
									<button
										href=" https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
										target="_blank"
										class="btn btn-outline-light btn-sm ms-2"
										disabled
									>
										Backend code
									</button>
									<span
										class="material-symbols-outlined text-light"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="The code for this project is private"
									>
										lightbulb
									</span>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://store.hp.com/app/assets/images/uploads/prod/ecommerce-vs-online-marketplace1603983748724190.jpg"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.5,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										E-COMMERCE MOBILE APP
									</h5>
									<div>
										<span className="badge    my-badge">Mobile</span>
										<span className="badge   my-badge">Full-stack</span>
										<span className="badge   my-badge">Flutter</span>
										<span className="badge   my-badge">Spring boot</span>
										<span className="badge   my-badge">Cassandra</span>
										<span className="badge   my-badge">ReST API</span>
										<span className="badge   my-badge">JWTs</span>
										<span className="badge   my-badge">Marketplace</span>
										<span className="badge   my-badge">Catalog</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											Application permiting sellers create a catalog of their products and make them available in an
											online market place.
										</small>
									</div>
									<a
										href="https://github.com/Mewoabi-Joe/Flutter_catalog_of_services"
										target="_blank"
										class="btn btn-light  active-btn btn-sm "
									>
										Frontend code
									</a>
									<a
										href="https://github.com/Mewoabi-Joe/Spring-boot-backend-status_and_catalog"
										target="_blank"
										class="btn btn-light  active-btn btn-sm ms-2 "
									>
										Backend code
									</a>
								</div>
							</div>
							<div
								className="skill-card   card border border-secondary p-0"
								style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
							>
								<img
									src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.webp"
									className="card-img-top img-fluid project-img-and-container  "
									alt=""
									style={{
										width: "100%",

										opacity: 0.5,
										borderTopRightRadius: "1.2rem",
										borderTopLeftRadius: "1.2rem",
									}}
								/>
								<div className="card-img-overlay">
									<h5 style={{ color: "white" }} className="card-title fw-bold ">
										THIS PORTFOLIO SITE
									</h5>
									<div>
										<span className="badge    my-badge">Frontend</span>
										<span className="badge   my-badge">React</span>
										<span className="badge   my-badge">Responsive</span>
									</div>
									<div
										style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }}
										className="my-2"
									>
										<small style={{ color: "white" }}>
											My site that presents who I am, show cases my skills and projects and ways to contact me.
										</small>
									</div>
									<a
										href="https://github.com/Mewoabi-Joe/My-Portfolio-site"
										target="_blank"
										class="btn btn-light  active-btn  "
									>
										Frontend code
									</a>
									<span
										class="material-symbols-outlined text-white"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="Still to refactor code"
									>
										lightbulb
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
