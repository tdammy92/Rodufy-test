import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./screens/LandingPage/Landing";
import Home from "./screens/Home/Home.js";
import Login from "./screens/Login/Login";
import Register from "./screens/Login/Register";

import Layouts from "./RouteConfig/Layouts";
import Auth from "./RouteConfig/Protected";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layouts />}>
				<Route path='/' element={<Landing />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />

				<Route element={<Auth />}>
					<Route path='home' element={<Home />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
