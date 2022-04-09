import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
	return (
		<div className="App" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
			<Navbar />
			<Home />
			<About />
		</div>
	);
}

export default App;
