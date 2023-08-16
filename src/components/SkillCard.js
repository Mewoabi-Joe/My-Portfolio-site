import React from "react";

const SkillCard = ({
	image,
	category,
	row1Items,
	row1Spacing,
	row2Items,
	row2Spacing,
	row3Items,
	row3Spacing,
	theMoreCard,
	rowsOfMoreCard,
	emptyCard,
}) => {
	if (emptyCard) {
		return <div className="skill-card card border  " style={{ borderWidth: "0px" }}></div>;
	} else {
		return (
			<div className="skill-card card border border-secondary" style={{ borderRadius: "1.5rem" }}>
				<img
					src={image}
					className="card-img-top img-fluid border border-light"
					alt=""
					style={{ borderRadius: "1.5rem", height: "200px", width: "500px" }}
				/>
				<div className="card-body">
					<h5 className="card-title text-center fw-bold">{category}</h5>
				</div>
				<ul className="list-group list-group-flush">
					{!theMoreCard && (
						<>
							<li
								className={`list-group-item d-flex justify-content-${row1Spacing}`}
								style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
							>
								{row1Items.map((item, index) => (
									<span key={index}>{item}</span>
								))}
							</li>
							<li
								className={`list-group-item d-flex justify-content-${row2Spacing}`}
								style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
							>
								{row2Items.map((item, index) => (
									<span key={index}>{item}</span>
								))}
							</li>
							{row3Items && (
								<li
									className={`list-group-item d-flex justify-content-${row3Spacing}`}
									style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
								>
									{row3Items.map((item, index) => (
										<span key={index}>{item}</span>
									))}
								</li>
							)}
						</>
					)}
					{theMoreCard &&
						rowsOfMoreCard.map((row, index) => (
							<li
								key={index}
								className="list-group-item d-flex justify-content-center"
								style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
							>
								<span>{row.item}</span>
								<small style={{ fontSize: "0.7rem" }} className="d-flex align-items-center f  ms-1">
									: {row.description}
								</small>
							</li>
						))}
				</ul>
			</div>
		);
	}
};

export default SkillCard;
