import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/logo.png';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import StoreIcon from '@mui/icons-material/Store';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Nabvar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="red" width="200" />
				</Link>

				<div className="" id="navbarNavAltMarkup">
					<div className="navbar-nav d-flex flex-row">
						<Link
							className="nav-link mx-2 btn position-relative btn-outline-secondary"
							to="/Turismo"
						>
							<HikingIcon />
							Turismo
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
								Pronto
							</span>
						</Link>
						<Link
							className="nav-link mx-2  btn position-relative btn-outline-secondary"
							to="/Transporte"
						>
							<DirectionsBusIcon />
							Transporte
						</Link>
						<Link
							className="nav-link mx-2  btn position-relative btn-outline-secondary"
							to="/Delivery"
						>
							<FastfoodIcon />
							Delivery
						</Link>
						<Link
							className="nav-link mx-2  btn position-relative btn-outline-secondary"
							to="/Oficios"
						>
							<EngineeringIcon />
							Servicios
						</Link>
						<Link
							className="nav-link mx-2  btn position-relative btn-outline-secondary"
							to="/Emprendimientos"
						>
							<StoreIcon />
							Comercio
						</Link>
						<Link className="btn btn-primary nav-link mx-2" to="/Anuncio">
							<GroupAddIcon />
							Inscríbete
						</Link>
						<Link className="btn btn-primary nav-link mx-2" to="/Contacto">
							<PhoneInTalkIcon />
							Contacto
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nabvar;
