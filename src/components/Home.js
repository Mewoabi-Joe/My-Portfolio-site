import React from "react";
import photo from "../assets/Photo.png";

export default function Home() {
	return (
		<section style={{ paddingTop: "6rem", paddingBottom: "6rem" }} id="home">
			<div className="container-lg">
				<div className=" row justify-content-center align-items-center">
					<div className=" d-block d-md-flex justify-content-end col-md-7 col-lg-6 text-center text-md-start lh-lg">
						<div>
							Hi, I'm <span className="display-6">Mewoabi Joe</span> <br />
							<span className="lead">Full-stack web</span> and <span className="lead">Mobile-app</span> developer <br />
							<span className="lead">React, React native</span> and <span className="lead">Node js</span> are my
							technologies <br />
							<button className="btn btn-outline-dark" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
								View my projects
							</button>
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
