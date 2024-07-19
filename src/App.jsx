import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';

function App() {
	return (
		<BrowserRouter>
			<nav className="navbar">
				<Link to="/">#VANLIFE</Link>
				<div className="links">
					<Link to="/about">About</Link>
					<Link to="/vans">Vans</Link>
				</div>
			</nav>
			<Routes>
				{/* <App /> */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<footer>&copy; 2022 #VANLIFE</footer>
		</BrowserRouter>
	);
}
export default App;
