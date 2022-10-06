import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';

import Contacto from './view/Contacto';
import Inicio from './view/Inicio';
import Anuncio from './view/Anuncio';
import Emprendimientos from './view/Emprendimientos';
import Turismo from './view/Turismo';
import Transporte from './view/Transporte';
import Oficios from './view/Oficios';
import LandingPage from './view/LandingPage';
import Delivery from './view/Delivery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Inicio />} />
				<Route path="/Anuncio" element={<Anuncio />} />
				<Route path="/Contacto" element={<Contacto />} />
				<Route path="/Turismo" element={<Turismo />} />
				<Route path="/Transporte" element={<Transporte />} />
				<Route path="/Emprendimientos" element={<Emprendimientos />} />
				<Route path="/Oficios" element={<Oficios />} />
				<Route path="/Delivery" element={<Delivery />} />
				<Route path="/LandingPage" element={<LandingPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
