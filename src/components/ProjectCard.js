import React from "react";
import ImageGallery from "./ImageGallery";

const ProjectCard = ({
	imageUrl,
	projectTitle,
	company,
	mainTechnologies,
	tags,
	screenshots,
	description,
	frontend,
	backend,
	info,
	role,
	previewUrl,
	emptyCard,
}) => {
	const willShowLightBulb = () => {
		if (info) {
			if (frontend) {
				if (!frontend.privateCode) {
					return true;
				}
			}
			if (backend) {
				if (!backend.privateCode) {
					return true;
				}
			}
			return false;
		}
		return false;
	};

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
				style={{ backgroundColor: "#111", borderRadius: "1.2rem", overflow: "hidden" }}
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
					<div className="d-flex justify-content-between">
						{company && (
							<h6 style={{ color: "white" }} className="card-title fw-bold mb-0 d-none d-lg-block ">
								{company.toLowerCase() !== "school project" && company.toLowerCase() !== "personal project" && "@"}{" "}
								{company}
							</h6>
						)}
						<span className="ms-auto">
							{mainTechnologies.map((tag, index) => (
								<span key={index} className="badge    main-tech-badge">
									{tag}
								</span>
							))}
						</span>
					</div>
					<div style={{ backgroundColor: "#000", opacity: 0.7, padding: "5px", borderRadius: "7px" }} className="my-2">
						<small style={{ color: "#fff", zIndex: 3 }}>{description}</small>
					</div>
					<div></div>
					<div className="d-none d-lg-block">
						{tags.map((tag, index) => (
							<span key={index} className="badge    my-badge">
								{tag}
							</span>
						))}
					</div>

					<div className="text-white my-2 fs-6 fw-bold">Role : {role}</div>
					{frontend && (
						<a
							href={frontend.githubUrl}
							target="_blank"
							rel="noreferrer"
							type="button"
							class={`btn link transparent btn-sm me-2 ${
								frontend.privateCode && "btn-outline-light inactive"
							} d-inline-flex justify-content-center align-items-center`}
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title={info && frontend.privateCode ? info : null}
							disabled={frontend.privateCode}
						>
							{frontend.privateCode && <span class="material-symbols-outlined fs-6 me-1 text-danger">hide_source</span>}
							{frontend.alternateText ? frontend.alternateText : "Frontend Code"}
						</a>
					)}
					{backend && (
						<a
							href={backend.githubUrl}
							target="_blank"
							rel="noreferrer"
							type="button"
							class={`btn link transparent btn-sm ${
								backend.privateCode && " btn-outline-light inactive"
							} d-inline-flex justify-content-center align-items-center`}
							disabled={backend.privateCode}
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title={info && backend.privateCode ? info : null}
						>
							{backend.privateCode && <span class="material-symbols-outlined fs-6 me-1 text-danger">hide_source</span>}
							<span>Backend code</span>
						</a>
					)}
					{willShowLightBulb() && (
						<span
							class="material-symbols-outlined text-white my-tooltip"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title={info}
						>
							lightbulb
						</span>
					)}
				</div>

				<div className="d-flex" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
					{!screenshots.hideButton && <ImageGallery screenshots={{ ...screenshots, screenshotsCaption: `${projectTitle} screenshot - ` }} />}
					{previewUrl && (
						<>
							<a
								href={previewUrl.url}
								target="_blank"
								rel="noreferrer"
								class={`btn link transparent btn-sm ms-2 ${
									previewUrl.disable && " inactive "
								} d-inline-flex justify-content-center align-items-center`}
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								data-bs-title={previewUrl.info && previewUrl.disable ? previewUrl.info : null}
							>
								{previewUrl.disable && <span class="material-symbols-outlined fs-6 me-1 text-danger">hide_source</span>}

								<span>Live preview</span>
								{/* <span style={{ marginRight: "5px" }}>Live preview</span>
							<span class="material-symbols-outlined">magnification_large</span> */}
							</a>

							{previewUrl.info && !previewUrl.disable && (
								<span
									class="material-symbols-outlined text-white my-tooltip"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									data-bs-title={previewUrl.info}
								>
									lightbulb
								</span>
							)}
						</>
					)}
				</div>
			</div>
		);
	}
};

export default ProjectCard;
