import React from "react";
import ProjectCard from "./ProjectCard";
import realEstate from "../assets/realEstate.jpg";
import b2b from "../assets/b2b.jpg";

const Projects = ({width}) => {
	return (
		<section id="projects" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "var(--darkest)" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4" style={{ color: "var(--medium)" }}>
						<span style={{ fontWeight: 900}}>MY PROJECTS </span>
						<span style={{fontSize: '1rem', fontWeight: 'bold'}}> (2018 - 2024)</span>
					</h2>
					<small style={{ color: "#bbb" }}>
						{/* Some of my projects, including source code for public repositories, screenshots, and links to deployed versions. */}
						Some of my projects with links to the code on github, a few screenshots, and links to preview them live.
						<span
									class="material-symbols-outlined text-white my-tooltip fs-6"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									data-bs-title={"All these projects including this portfolio site is fully responsive 🔥 so feel free using your mobile device to preview them."}
								>
									lightbulb
								</span>
					</small>
					{/* <span
						class="material-symbols-outlined text-white"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="These are test deployments, so have fun with them"
					>
						lightbulb
					</span> */}
				</div>

				{/* <h4 className="ps-3 mt-5 ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					My Most Recent Project
				</h4> */}

				{/* <div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								imageUrl={realEstate}
								projectTitle={"REAL ESTATE VALUATION WEB APP"}
								company={"Kejang Noah Groups"}
								description={
									"A real estate valuation platform for bidding, executing, and delivering projects."
								}
								mainTechnologies={["React", "Tailwind CSS", "NestJS", "MongoDB"]}
								tags={[
									"Authentication",
									"Rich search",
									"Maps",
									"Heavy forms",
									"Notification system",
									"File management",
									"Tables",
								]}
								backend={{ privateCode: true }}
								info={"Private"}
								role={"Lead backend Developer"}
								screenshots={{disable: true}}
								previewUrl={{ disable: true, info: "Not yet deployed for the public"}}
							/>

							<ProjectCard emptyCard={true} />
						</div>
					</div>
				</div> */}

				<h4 className="ps-3 mt-5 ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					Projects for companies 
				</h4>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
						<ProjectCard
								imageUrl={
									b2b
								}
								projectTitle={"B2B SOURCING WEB APP"}
								company={"Shypto"}
								description={
									"A B2B sourcing platform for registering as a supplier or buyer, enabling product listing, searching, and ordering."
								}
								mainTechnologies={["React", "Material UI", "NestJS", "MongoDB"]}
								tags={[
									"Authentication",
									"Contact verification",
									"Search and filter",
									"Responsiveness",
								]}
								role={"Solo Full-stack Developer"}
								frontend={{  privateCode: true }}
								backend={{privateCode: true }}
								info={'Private'}
								previewUrl={{ url: "https://shypto.web.app/"
									// , info: "This is a test deployment of early work. Feel free taking a tour, you can try signing up if you wish."
								}}
								screenshots={{imageFolderName: 'b2bsourcing'}}
							/>
							<ProjectCard
								imageUrl={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGy5LZl0OImdEFnHZhEt0RwczU-qbSSCdrg&usqp=CAU"
								}
								projectTitle={"MEDICAL CLINIC WEB APP"}
								company={"Spectrum Labs"}
								description={
									"An online platform for scheduling, payment, and result viewing of lab tests at Spectrum Labs."
								}
								mainTechnologies={["React", "Bootstrap", "NodeJS", "MongoDB"]}
								tags={[
									"Authentication",
									"Responsive",
									"Role and access control",
									"Content management and CRUD",
									"Payment processing",
								]}
								role={"Full-stack Developer"}
								// info={"This is an early version of the project. The latest code is private"}
								frontend={{ githubUrl: "https://github.com/Mewoabi-Joe/SpectrumLab/tree/master/React-frontend" }}
								backend={{ githubUrl: "https://github.com/Mewoabi-Joe/SpectrumLab/tree/master/NodeJS-backend" }}
								previewUrl={{ url: "https://clinic-d45d7.web.app"
									// , info: "This is a test deployment of early work, feel free taking a tour. You can signup with as a normal user or admin. For admin access use credentials: email: joe@gmail.com, password: joe123"
									, info: "For admin access use credentials: email: joe@gmail.com, password: joe123"
								}}
								screenshots={{imageFolderName:'spectrumlabs'}}
							/>
							<ProjectCard
								imageUrl={
									"https://media.istockphoto.com/id/1437923297/photo/portrait-of-african-businessman-with-laptop-looking-in-camera-and-smiling.jpg?s=612x612&w=0&k=20&c=rNN2MOynIJUSKD02ACswTFevi2CGGO797CkuRuiaPqw="
								}
								projectTitle={"LANDING SITE"}
								company={"Evergreen Business Initiatives"}
								description={
									"Fully responsive landing site providing an online presence for Evergreen Business Initiatives."
								}
								mainTechnologies={["React", "Material UI"]}
								tags={["Business landing site", "Responsiveness", "Styled components"]}
								frontend={{ privateCode: true }}
								role={"Solo Frontend Developer"}
								info={"Private code"}
								previewUrl={{url: "https://evergreenbusinessinitiatives.com"
									// , info: "The actual website in production"
									, info: "Actual production site"
								}}
								screenshots={{imageFolderName: 'evergreen'}}
							/>

							<ProjectCard emptyCard={true} />
						</div>
					</div>
				</div>

				{/* <h4 className="ps-3 mt-5 ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					Internship projects
				</h4> */}

				{/* <div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								imageUrl={"https://miro.medium.com/v2/resize:fit:1400/1*WQPnsa2Jlv12ZjbQHKUUBA.jpeg"}
								projectTitle={"CRYPTOCURRENCY EXCHANGE WEB APPLICATION"}
								company={"Bitkap"}
								description={
									"A web application that permits users deposit, buy, sell, transfer and withdraw cryptocurrencies"
								}
								mainTechnologies={["Angular","Angular Material", "Node.js", "PostgreSQL"]}
								tags={[
									"Security",
									"Authentication",
									"Payments",
									"CI/CD",
									"Docker",
									"Testing",
									"Internationalization",
									"Responsiveness",
								]}
								role={"Frontend Lead Developer"}
								frontend={{ privateCode: true }}
								info={"Private"}
								previewUrl={{ url: "https://app.bitkap.africa", info: "The actual web app in production" }}
								screenshots={{imageFolderName: 'bitkap'}}

							/>

							 
							<ProjectCard
								imageUrl={
									"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl50253632876-public-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fc1ed7e65817efe6d2f3e8fd2b4ea78f"
								}
								projectTitle={"STORE INVENTORY WEB SERVICE"}
								company={"Go-Groups"}
								description={
									"A microservices-based REST API for managing store inventory, including user management, authentication, and CRUD operations for stores and products."
								}
								mainTechnologies={["React", "Tailwind CSS", "Spring Boot", "MySQL"]}
								tags={["Authentication", "Microservices", "Spring Security ", "API Gateway ", "CRUD operations"]}
								role={"Backend Developer"}
								backend={{
									privateCode: true,
								}}
								info={"private"}
								previewUrl={{disable: true, info: "I don't have the current deployment URL for this project, just provided swagger docs screenshots of some microservice endpoints I implemented" }}
								screenshots={{imageFolderName: 'gogroups'}}
							/>
							

							<ProjectCard emptyCard={true} />
						</div>
					</div>
				</div> */}

				<h4 className="ps-3 mt-5  ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					School projects
				</h4>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								// info={"This is an initial version of the project. The latest version is private"}
								imageUrl={
									"https://www.smartinsights.com/wp-content/uploads/2016/03/Screen-Shot-2016-02-03-at-11.28.39.png"
								}
								projectTitle={"E-COMMERCE MOBILE APP"}
								description={
									"Application permiting sellers create a catalog of their products and make them available in an online market place."
								}
								company={"School Project"}
								mainTechnologies={["Flutter", "Spring Boot", "PostgreSQL"]}
								tags={["CRUD operations", "Authentication", "Notifications", "E-commerce ", "Redux "]}
								role={"FullStack Developer"}
								frontend={{
									githubUrl: "https://github.com/Mewoabi-Joe/Flutter_catalog_of_services",
								}}
								backend={{
									githubUrl: "https://github.com/Mewoabi-Joe/Spring-boot-backend-status_and_catalog",
								}}
								previewUrl={{disable: true, info: "No mobile app preview available yet" }}
								screenshots={{disable: true, info: "Still to be uploaded" }}

							/>
							<ProjectCard
								// info={"This is an initial version of the project. The latest version is private"}
								imageUrl={
									"https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
								}
								projectTitle={"FUND MANAGEMENT APP"}
								company={"School Project"}
								description={
									"A mobile app for group fund management, enabling deposits, loans, savings, contributions, and financial assistance requests, overseen by an admin."
								}
								mainTechnologies={["React Native", "Node.js", "PostgreSQL"]}
								tags={[
									"Authentication",
									"Dates, time and arithmetic operations",
									"CRUD operations",
									"Notifications",
									"Cross Platform",
								]}
								role={"Lead Frontend Developer"}
								frontend={{
									githubUrl: "https://github.com/valdesguefa/MutuelleMobile",
								}}
								screenshots={{disable: true, info: "Still to be uploaded" }}
								previewUrl={{disable: true, info: "No mobile app preview available yet" }}

							/>

						</div>
					</div>
				</div>

				<h4 className="ps-3 mt-5  ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					Personal projects
				</h4>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								imageUrl={"https://dig.abclocal.go.com/wtvd/WSI_Weather_maps/7dayMAX.jpg"}
								projectTitle={"WEATHER WEB CLIENT"}
								company={"Personal project"}
								description={
									"A weather app that provides current conditions and forecasts, supports search by country, and allows temperature unit toggling."
								}
								mainTechnologies={["Angular", "Bootstrap"]}
								tags={["Responsive ", "Geo-location API", "Open source weather API"]}
								role={"Solo Frontend Developer"}
								frontend={{alternateText: "Code", githubUrl: "https://github.com/Mewoabi-Joe/Go-groups-task-1-angular" }}
								previewUrl={{url: "https://weather-app-79386.web.app/"}}
								screenshots={{imageFolderName: 'weatherapp'}}

							/>
							<ProjectCard
								imageUrl={
									"https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png"
								}
								projectTitle={"TODO APP"}
								company={"Personal project"}
								description={
									"Simple and intuitive CRUD Todo app, you can create, update and delete your tasks. It is persistent, so don't fear closing the app. App has great user experience."
								}
								mainTechnologies={["Angular", "Angular Material", "Firebase"]}
								tags={["CRUD", "User experience", "Mobile first design"]}
								role={"Solo FullStack Developer"}
								frontend={{alternateText: "Code", githubUrl: "https://github.com/Mewoabi-Joe/limitless-tech-todo-app-test" }}
								previewUrl={{url: "https://todo-app-8b9ef.web.app"}}
								screenshots={{imageFolderName: 'todoapp'}}

							/>

							<ProjectCard
								imageUrl={
									"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.webp"
								}
								projectTitle={"PORTFOLIO SITE"}
								company={"Personal project"}
								description={
									"This is my personal portfolio site, showcasing who I am, my skills, my previous projects, and providing ways to contact me."
								}
								mainTechnologies={["React", "Bootstrap"]}
								tags={["Responsive", "Single page site"]}
								role={"Solo Frontend Developer"}
								frontend={{
									alternateText: "Code",
									githubUrl: "https://github.com/Mewoabi-Joe/My-Portfolio-site/tree/dev",
								}}
								screenshots={{hideButton: true}}

							/>
							<ProjectCard emptyCard={true} />
						</div>
					</div>
				</div>

				
			</div>
		</section>
	);
};

export default Projects;
