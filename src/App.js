import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyModal from "./components/MyModal";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
	document.addEventListener("DOMContentLoaded", function () {
		// Select all UI DOM elements
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
	});

	const openModal = () => {
		const myModalAlternative = new Modal("#exampleModal", {});
		myModalAlternative.show();
	};

	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState(" ");

	const showModal = (isSuccess, message) => {
		setIsSuccess(isSuccess);
		setMessage(message);
		openModal();
	};

	return (
		<div
			className="scrollspy-example"
			data-bs-spy="scroll"
			data-bs-target="#my-navbar"
			data-bs-smooth-scroll="true"
			data-bs-offset="50"
			tabindex="0"
		>
			<MyModal isSuccess={isSuccess} message={message} />
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact showModal={showModal} />
		</div>
	);
}

export default App;
