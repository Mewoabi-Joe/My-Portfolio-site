import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<section id="projects" style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "var(--darkest)" }}>
			<div className="container-lg">
				<div className="text-center mb-5">
					<h2 className="display-4" style={{ fontWeight: 900, color: "var(--medium)" }}>
						MY PROJECTS
					</h2>
					<small style={{ color: "#bbb" }}>Some projects I've worked on</small>
					<span
						class="material-symbols-outlined text-white"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="These are test deployments, so have fun with them"
					>
						lightbulb
					</span>
				</div>

				<h4 className="ps-3 mt-5 ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					Big projects
				</h4>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								imageUrl={"https://miro.medium.com/v2/resize:fit:1400/1*WQPnsa2Jlv12ZjbQHKUUBA.jpeg"}
								projectTitle={"CRYPTOCURRENCY EXCHANGE WEB CLIENT"}
								description={"Web client that permits users deposit, exchange and withdraw currencies"}
								tags={[
									"Frontend",
									"Angular",
									"CI/CD",
									"GCP",
									"Cypress",
									"Docker",
									"ReST API",
									"Internationalised",
									"Responsive",
								]}
								frontend={{ privateCode: true }}
								info={"The latest project I just worked on for the fintech Limitless Tech"}
							/>
							<ProjectCard
								imageUrl={
									"https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
								}
								projectTitle={"FUND MANAGEMENT APP"}
								description={
									"App for management of the funds of individuals who belong to a group. An admin manages the platform and users can deposit, borrow, save, contribute money aswell as ask for financial help."
								}
								tags={[
									"Mobile ",
									"Frontend",
									"React native ",
									"ReST API ",
									"JWTs ",
									"Authentication ",
									"Fintech",
									"State management",
								]}
								frontend={{
									githubUrl: "https://github.com/valdesguefa/MutuelleMobile",
								}}
							/>
							<ProjectCard
								imageUrl={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGy5LZl0OImdEFnHZhEt0RwczU-qbSSCdrg&usqp=CAU"
								}
								projectTitle={"MEDICAL CLINIC WEB APP"}
								description={
									"Patients can see the different lab tests, book and pay for lab tests and get notified when thier results are out."
								}
								tags={[
									"Full-stack",
									"React",
									"Node js",
									"Authentication",
									"JWTs",
									"Mongo DB",
									"Rest API",
									"Responsive",
									"Payment processing",
									"Protected routes",
								]}
								frontend={{ githubUrl: "https://github.com/Mewoabi-Joe/SpectrumLab/tree/master/React-frontend" }}
								backend={{ githubUrl: "https://github.com/Mewoabi-Joe/SpectrumLab/tree/master/NodeJS-backend" }}
								previewInfo={
									"You can signup and take a tour as normal user or as the admin who manages the site with email: joe@gmail.com, password: joe123"
								}
								previewUrl={"https://clinicproject-joe.webdevmobiledev.com"}
							/>
							<ProjectCard
								imageUrl={
									"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl50253632876-public-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fc1ed7e65817efe6d2f3e8fd2b4ea78f"
								}
								projectTitle={"STORE INVENTORY WEB SERVICE"}
								description={
									"A microservices architecture providing a comprehensive REST API for efficient store inventory management, including user functions, authentication, CRUD operations for stores/products, and advanced querying options."
								}
								tags={[
									"Backend ",
									"Spring boot ",
									"MySQL ",
									"Microservices ",
									"ReST API ",
									"Spring Security ",
									"JWTs ",
									"API Gateway ",
								]}
								backend={{
									githubUrl:
										"https://github.com/Mewoabi-Joe/Go-groups-task-3-microservices-in-communication-for-warehouse-management",
								}}
								microServicePreviewUrls={[
									{ name: "user-service", url: "https://userservice-joe.web.app/swagger-ui/index.html" },
									{ name: "inventory-service", url: "https://inventoryservice-joe.web.app/swagger-ui/index.html" },
									{ name: "ui-service", url: "https://uiservice-joe.web.app/swagger-ui/index.html" },
								]}
							/>
							<ProjectCard
								imageUrl={
									"https://www.smartinsights.com/wp-content/uploads/2016/03/Screen-Shot-2016-02-03-at-11.28.39.png"
								}
								projectTitle={"E-COMMERCE MOBILE APP"}
								description={
									"Application permiting sellers create a catalog of their products and make them available in an online market place."
								}
								tags={[
									"Mobile",
									"Full-stack ",
									"Flutter",
									"Spring boot",
									"Cassandra ",
									"ReST API ",
									"E-commerce ",
									"Redux ",
								]}
								frontend={{
									githubUrl: "https://github.com/Mewoabi-Joe/Flutter_catalog_of_services",
								}}
								backend={{
									githubUrl: "https://github.com/Mewoabi-Joe/Spring-boot-backend-status_and_catalog",
								}}
							/>
							<ProjectCard emptyCard={true} />
						</div>
					</div>
				</div>

				<h4 className="ps-3 mt-5  ms-lg-4  mb-4" style={{ fontWeight: 700, color: "var(--medium)" }}>
					Small projects
				</h4>

				<div className="row justify-content-center" style={{ paddingLeft: 12, paddingRight: 12 }}>
					<div className="col-md-12 col-lg-11 ">
						<div className=" row row-cols-1 row-cols-sm-2 align-items-end justify-content-center  ">
							<ProjectCard
								imageUrl={"https://dig.abclocal.go.com/wtvd/WSI_Weather_maps/7dayMAX.jpg"}
								projectTitle={"WEATHER WEB CLIENT"}
								description={
									"Fully responsive weather app. Geo-locates app user, shows weather and forecast from ReST API. Possibility to search weather of a country and switch temperature display between degrees celsius and fahrenheit"
								}
								tags={["Frontend ", "Angular ", "Responsive ", "Bootstrap ", "Rest API "]}
								frontend={{ githubUrl: "https://github.com/Mewoabi-Joe/Go-groups-task-1-angular" }}
								previewUrl={"https://weatherapp-joe.webdevmobiledev.com"}
							/>
							<ProjectCard
								imageUrl={
									"https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png"
								}
								projectTitle={"TODO APP"}
								description={
									"Simple and intuitive CRUD Todo app, you can create, update and delete your tasks. It is persistent, so don't fear closing the app. App has great user experience."
								}
								tags={["Frontend ", "Angular ", "Firebase", "CRUD", "UX"]}
								frontend={{ githubUrl: "https://github.com/Mewoabi-Joe/limitless-tech-todo-app-test" }}
								previewUrl={"https://todoapp-joe.webdevmobiledev.com"}
								previewInfo={"To create a task click the + icon at the top right"}
							/>

							<ProjectCard
								imageUrl={
									"https://androidpowerhub.com/wp-content/uploads/2017/06/Galaxy-Note-5-text-messaging-problems.jpg"
								}
								projectTitle={"SIMPLE MESSAGING WEB APP"}
								description={
									"Create an account, add the contact of the person you want to message on the platform. If the person has an account aswell on the platform and has added your contact, you can go on messaging each other"
								}
								tags={["Full-stack ", "Angular ", "Node js ", "Mongo DB ", "ReST API ", "JWTs ", "Authentication "]}
								frontend={{
									githubUrl:
										"https://github.com/Mewoabi-Joe/Full-stack-NodeJs-Angular-SMS-APP/tree/main/Angular-frontend",
								}}
								backend={{
									githubUrl: " https://github.com/Mewoabi-Joe/Full-stack-NodeJs-Angular-SMS-APP/tree/main/Node-backend",
								}}
								previewUrl={"https://smsapp-joe.webdevmobiledev.com"}
							/>

							<ProjectCard
								imageUrl={
									"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.webp"
								}
								projectTitle={"THIS PORTFOLIO SITE"}
								description={
									"My site that presents who I am, show cases my skills and projects and ways to contact me."
								}
								tags={["Frontend ", "React ", "Responsive "]}
								frontend={{
									githubUrl: "https://github.com/Mewoabi-Joe/My-Portfolio-site/tree/dev",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
