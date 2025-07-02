import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import FormT from "./pages/FormT";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { TaskContProvider } from "./context/TaskContext";

function App() {
	return (
		<TaskContProvider>
			<Nav />
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/nuevo" element={<FormT />} />
				<Route path="/editar/:id" element={<FormT />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</TaskContProvider>
	);
}

export default App;
