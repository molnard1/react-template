import React from "react";
import { createRoot } from 'react-dom/client';

export default function App() {
    return (
		<h1>Hello World!</h1>
	)
}

createRoot(document.getElementById("root")).render(<App />);
