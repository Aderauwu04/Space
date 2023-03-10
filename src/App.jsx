import Navbar from "../src/components/Navbar";
import Inicio from "../src/components/Inicio";
import Formulario from "../src/components/Formulario";
import Footer from "../src/components/Footer";
import Planes from "./components/Planes";
import Experiencias from "../src/components/Experiencias";
import Nosotros from "../src/components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route
							index
							element={
								<>
									<Inicio />
									<Nosotros />
									<Experiencias />
									<Formulario />
									<Footer />
								</>
							}
						/>
						<Route
							path="Planes"
							element={
								<>
									<Planes />
									<Footer />
								</>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
