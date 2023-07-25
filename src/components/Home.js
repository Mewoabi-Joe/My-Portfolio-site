import React from "react";
import photo from "../assets/Photo.png";

export default function Home() {
	return (
		<section
			style={{
				backgroundColor: "var(--darkest)",
				color: "white",
				paddingTop: "6rem",
				paddingBottom: "6rem",
				fontSize: "1.8rem",
			}}
			id="home"
		>
			<div className="container-lg">
				<div className=" row justify-content-center align-items-center">
					<div className=" d-block d-md-flex justify-content-end col-md-7 col-lg-6 text-center text-md-start lh-lg">
						<div>
							Hi, I'm <br />
							<span className="h1" style={{ color: "var(--medium)", fontWeight: 700 }}>
								Mewoabi Joe
							</span>{" "}
							<br />
							<span
								className="h1"
								style={{
									color: "var(--medium)",
									fontWeight: 700,
								}}
							>
								Full-stack web
							</span>{" "}
							and <br />
							<span
								className="h1"
								style={{
									color: "var(--medium)",
									fontWeight: 700,
								}}
							>
								Mobile-app
							</span>{" "}
							developer <br />
							<div className="my-4" style={{ width: "100%" }}>
								<a style={{ width: "50%" }} href="#about" class="btn btn-outline-light btn-lg   ">
									My skills
								</a>
								<a style={{ width: "50%" }} href="#projects" class="btn btn-outline-info btn-lg ">
									My projects
								</a>
							</div>
						</div>
					</div>
					<div className=" col-4 col-md-5 col-lg-6    text-center">
						<img src={photo} alt="My photo" className="img-fluid" />
					</div>
				</div>
			</div>
		</section>
	);
}
