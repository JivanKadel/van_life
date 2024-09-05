import {
	// BrowserRouter,
	// Routes,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from 'react-router-dom';
import Home from './Routes/Vans/Home';
import About from './Routes/About';
import Vans, { loader as vansLoader } from './Routes/Vans/Vans';

import VanDetails, {
	loader as vanDetailsLoader
} from './Routes/Vans/VanDetails';
// import Header from './components/Header';
import Layout from './components/Layout';
import Dashboard from './Routes/Host/Dashboard';
import Income from './Routes/Host/Income';
import Reviews from './Routes/Host/Reviews';
import HostHeader from './components/HostLayout';
import HostVans, { loader as hostVansLoader } from './Routes/Host/Vans';
// import HostVan from './Routes/Host/HostVan';
import HostVanHeader, {
	loader as hostVanLoader
} from './Routes/Host/HostVanHeader';
import HostVanInfo from './Routes/Host/HostVanInfo';
import HostVanPhoto from './Routes/Host/HostVanPhoto';
import HostVanPricing from './Routes/Host/HostVanPricing';
import FourOFour from './Routes/FourOFour';
import Error from './components/Error';
import Login, {
	loader as loginLoader,
	action as loginAction
} from './Routes/Login';
import { requireAuth } from './utils/utils';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			// <Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route
					path="login"
					element={<Login />}
					loader={loginLoader}
					action={loginAction}
				/>
				<Route
					path="vans"
					errorElement={<Error />}
					loader={vansLoader}
					element={<Vans />}
				/>
				<Route
					path="vans/:id"
					element={<VanDetails />}
					loader={vanDetailsLoader}
				/>

				<Route path="host" element={<HostHeader />}>
					<Route
						index
						element={<Dashboard />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="income"
						element={<Income />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="reviews"
						element={<Reviews />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="vans"
						element={<HostVans />}
						// loader={async () => await requireAuth()}
						loader={hostVansLoader}
					/>
					{/* <Route path="vans/:id" element={<HostVan />} /> */}
					<Route
						path="vans/:id"
						element={<HostVanHeader />}
						loader={hostVanLoader}
					>
						<Route
							index
							element={<HostVanInfo />}
							loader={async ({ request }) => await requireAuth(request)}
						/>
						<Route
							path="photo"
							element={<HostVanPhoto />}
							loader={async ({ request }) => await requireAuth(request)}
						/>
						<Route
							path="pricing"
							element={<HostVanPricing />}
							loader={async ({ request }) => await requireAuth(request)}
						/>
					</Route>
				</Route>
				<Route path="*" element={<FourOFour />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}
export default App;
