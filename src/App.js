import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [position, setPosition] = useState("center");

	useEffect(() => {
		//setting the current position on mount
		let currentPosition = localStorage.getItem("position");
		console.log(currentPosition);
		if (currentPosition === null) {
			return;
		}
		setPosition(currentPosition);
	}, []);

	return (
		<>
			<div className="positions-options">
				<label>Select position</label>

				<button
					onClick={() => {
						setPosition("top-left");
						localStorage.setItem("position", "top-left");
					}}
				>
					Top Left
				</button>

				<button
					onClick={() => {
						setPosition("buttom-left");
						localStorage.setItem("position", "buttom-left");
					}}
				>
					Button Left
				</button>

				<button
					onClick={() => {
						setPosition("center");
						localStorage.setItem("position", "center");
					}}
				>
					Center
				</button>

				<button
					onClick={() => {
						setPosition("buttom-right");
						localStorage.setItem("position", "buttom-right");
					}}
				>
					Button Right
				</button>

				<button
					onClick={() => {
						setPosition("top-right");
						localStorage.setItem("position", "top-right");
					}}
				>
					Top Right
				</button>
			</div>
			<div className={position}>
				<label>User Name</label>
				<input placeholder="Name" />

				<label>Password</label>
				<input placeholder="Password" />

				<button>Submit</button>
			</div>
		</>
	);
}

export default App;
