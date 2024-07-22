import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Vans/Home';
import About from './Routes/About';
import Vans from './Routes/Vans/Vans';
import VanDetails from './Routes/Vans/VanDetails';
// import Header from './components/Header';
import Layout from './components/Layout';
import Dashboard from './Routes/Host/Dashboard';
import Income from './Routes/Host/Income';
import Reviews from './Routes/Host/Reviews';
import HostHeader from './components/HostLayout';
import HostVans from './Routes/Host/Vans';
// import HostVan from './Routes/Host/HostVan';
import HostVanHeader from './Routes/Host/HostVanHeader';
import HostVanInfo from './Routes/Host/HostVanInfo';
import HostVanPhoto from './Routes/Host/HostVanPhoto';
import HostVanPricing from './Routes/Host/HostVanPricing';

function App() {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="/host" element={<About />} /> */}
					<Route path="about" element={<About />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetails />} />

					<Route path="host" element={<HostHeader />}>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="vans" element={<HostVans />} />
						{/* <Route path="vans/:id" element={<HostVan />} /> */}
						<Route path="vans/:id" element={<HostVanHeader />}>
							<Route index element={<HostVanInfo />} />
							<Route path="photo" element={<HostVanPhoto />} />
							<Route path="pricing" element={<HostVanPricing />} />
						</Route>
					</Route>
				</Route>
				{/* <App /> */}
			</Routes>
		</BrowserRouter>
	);
}
export default App;
