import React from "react";
import { createRoot } from 'react-dom/client';
import axios from "axios";

export default function App() {
	axios.get("/"); // causes React instrumentation error

    return (
		<h1>Hello World!</h1>
	)
}

createRoot(document.getElementById("root")).render(<App />);
