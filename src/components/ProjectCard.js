import React from "react";

const ProjectCard = ({
	imageUrl,
	projectTitle,
	tags,
	description,
	frontend,
	backend,
	info,
	previewUrl,
	emptyCard,
	microServicePreviewUrls,
	previewInfo,
}) => {
	if (emptyCard) {
		return (
			<div
				className="skill-card   card   p-0"
				style={{ backgroundColor: "var(--darker)", borderWidth: "0px", borderRadius: "1.2rem", overflow: "hidden" }}
			></div>
		);
	} else {
		return (
			<div
				className="skill-card   card border border-secondary p-0"
				style={{ backgroundColor: "var(--darker)", borderRadius: "1.2rem", overflow: "hidden" }}
			>
				<img
					src={imageUrl}
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
						{projectTitle}
					</h5>
					<div>
						{tags.map((tag, index) => (
							<span key={index} className="badge    my-badge">
								{tag}
							</span>
						))}
					</div>
					<div style={{ backgroundColor: "#000", opacity: 0.8, padding: "5px", borderRadius: "7px" }} className="my-2">
						<small style={{ color: "white", zIndex: 3 }}>{description}</small>
					</div>
					{frontend && (
						<a
							href={frontend.githubUrl}
							target="_blank"
							rel="noreferrer"
							type="button"
							class={`btn link btn-light btn-sm  ${frontend.privateCode && "btn-outline-light inactive"}`}
							disabled={frontend.privateCode}
						>
							Frontend code
						</a>
					)}
					{backend && (
						<a
							href={backend.githubUrl}
							target="_blank"
							rel="noreferrer"
							type="button"
							class={`btn link btn-light btn-sm  ${frontend && "ms-2"} ${
								backend.privateCode && " btn-outline-light inactive"
							}`}
							disabled={backend.privateCode}
						>
							Backend code
						</a>
					)}

					{info && (
						<span
							class="material-symbols-outlined text-white"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title={info}
						>
							lightbulb
						</span>
					)}
				</div>

				<div className="d-flex" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
					{previewUrl && (
						<a
							href={previewUrl}
							target="_blank"
							rel="noreferrer"
							class="btn btn-light btn-sm  active-btn  d-flex justify-content-center align-items-center"
						>
							<span style={{ marginRight: "5px" }}>Live preview</span>
							<span class="material-symbols-outlined">magnification_large</span>
						</a>
					)}
					{previewInfo && (
						<span
							class="material-symbols-outlined text-white"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title={previewInfo}
						>
							lightbulb
						</span>
					)}
				</div>

				{microServicePreviewUrls && (
					<div
						style={{ position: "absolute", bottom: "10px", right: "10px" }}
						className="d-flex justify-content-end w-100 "
					>
						{microServicePreviewUrls.map((service) => (
							<a
								href={service.url}
								target="_blank"
								rel="noreferrer"
								class="btn btn-light btn-sm  active-btn  d-flex justify-content-center align-items-center"
								style={{ marginLeft: "5px", fontSize: "0.7rem", padding: "2px 4px", maxHeight: "32px" }}
							>
								<span style={{ marginRight: "5px" }}>{service.name}</span>
								<span class="material-symbols-outlined">magnification_large</span>
							</a>
						))}
						<span
							class="material-symbols-outlined text-white"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title="Test deployment. Normally all request go through the API gateway service. For testing purposes I just separately provided the docs for the different services"
						>
							lightbulb
						</span>
					</div>
				)}
			</div>
		);
	}
};

export default ProjectCard;
