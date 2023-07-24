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

function App() {
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
		<div className="App" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
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
