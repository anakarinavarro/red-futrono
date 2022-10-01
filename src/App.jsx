import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './view/LandingPage';

function App() {
	const [landing, setLanding] = React.useState(true);

	return (
		<>
			<div className="container-fluid">
				{landing ? (
					<LandingPage />
				) : (
					<div>
						<Navbar className="navegation" />
						<div className="container py-4">
							<Outlet />
						</div>
						<Footer />
					</div>
				)}
			</div>
		</>
	);
}

export default App;
