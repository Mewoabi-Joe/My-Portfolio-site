import React from "react";

const MyModal = ({ message, isSuccess }) => {
	return (
		<div>
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div style={{ backgroundColor: isSuccess ? "var(--medium)" : "pink" }} class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">
								{message}
							</h1>
							{!isSuccess ? (
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							) : (
								<button
									style={{ backgroundColor: "var(--darkest" }}
									type="button"
									class="btn btn-secondary rounded-3"
									data-bs-dismiss="modal"
								>
									OK
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyModal;
