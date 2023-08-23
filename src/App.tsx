import { Route, Routes } from "react-router-dom";

import Projects from "./components/projects/projects.component";
import Home from "./components/home/home.component";
import Navigation from "./components/navigation/navigation.component";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Projects />} />
			</Route>
		</Routes>
	);
}

export default App;
