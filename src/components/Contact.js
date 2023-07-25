import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useRef } from "react";
import emailjs from "emailjs-com";
// import Swal from "sweetalert";

const Contact = ({ showModal }) => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_zk526c1", "template_pnkrgiu", form.current, "thCRQouEjDP84DyTX")

			.then(
				(result) => {
					showModal(true, "Your message was successfully sent to Mewoabi Joe's email inbox");
					e.target.reset();
				},
				(error) => {
					showModal(false, "An error occurred. Please try again later.");
				}
			);
	};
	return (
		<section id="contact" style={{ paddingTop: "6rem" }}>
			<h2 className="display-4 text-center mb-5" style={{ fontWeight: 900 }}>
				Contact me
			</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<div className="my-row">
						<article className="contact__option">
							<BsTelephone className="contact__option__icon fs-1 left" />

							<div className="d-flex justify-content-center  flex-column align-items-center">
								<small className="d-block">+237 677662876</small>
								<small className="d-block mt-2">Via phone call</small>
							</div>
						</article>

						<article className="contact__option">
							<MdOutlineEmail className="contact__option__icon fs-1  left" />
							<div className="d-flex justify-content-center  flex-column align-items-center">
								<small className="d-block">lekeakajoe@gmail.com</small>
								<a
									href="mailto:lekeakajoe@gmail.com"
									target="_blank"
									rel="noopener"
									style={{ borderRadius: "10px" }}
									class="btn btn-outline-secondary btn-sm contact-btn m-0   me-lg-5  mt-2 text-white"
								>
									via email
								</a>
							</div>
						</article>
					</div>
					<div className="my-row">
						<article className="contact__option d-flex justify-content-start align-items-center">
							<AiOutlineLinkedin className="contact__option__icon m-0 fs-1" />

							<a
								href="https://www.linkedin.com/in/mewoabi-lekeaka-joe-8a22801ba/"
								target="_blank"
								rel="noopener"
								style={{ borderRadius: "10px" }}
								class="btn d-block btn-outline-secondary btn-sm contact-btn m-0 ms-3 d-flex justify-content-center  flex-column align-items-center text-white"
							>
								via linkedIn
							</a>
						</article>
						<article className="contact__option">
							<GoLocation className="contact__option__icon fs-1" />
							<span className="d-flex justify-content-center  flex-column align-items-center">
								<small className="d-block">Obili Yaounde</small>
								<small className="d-block">Cameroon</small>
							</span>
						</article>
					</div>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<h4 className="mb-0" style={{ fontWeight: 600 }}>
						Direct message
					</h4>
					<input type="text" name="name" placeholder="full name" required />
					<input type="email" name="email" placeholder="your email" required />
					<textarea name="message" id="message" cols="30" rows="10" placeholder="your message" required></textarea>
					<button
						type="submit"
						style={{ borderRadius: "15px" }}
						className="btn  text-white btn-outline-secondary btn-lg form-button contact-btn"
					>
						send message
					</button>
				</form>
			</div>
		</section>
	);
};
export default Contact;
