import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<div className="container-fluid">
				<div>
					<Navbar className="navegation" />
					<div className="container py-4">
						<Outlet />
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
