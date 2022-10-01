import React from 'react';
import { Link } from 'react-router-dom';
const Carrusel = () => {
	return (
		<div className="container my-2">
			<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div className="col-lg-8 p-3 p-lg-5 pt-lg-3">
					<h1 className="display-4 fw-bold lh-1">
						Todo lo que necesitas
						<br />
						está en Futrono
					</h1>
					<p className="lead">
						Red Futrono es un servicio a la comunidad que tiene como objetivo
						digitalizar la información y activar el comercio local.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
						<Link
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
							to="/Anuncio"
						>
							Inscríbete
						</Link>
						<Link
							type="button"
							className="btn btn-outline-secondary btn-lg px-4"
							to="/Contacto"
						>
							Contacto
						</Link>
					</div>
				</div>
				<div className="col-lg-3 offset-lg-1 p-0 overflow-hidden shadow-lg">
					<img className="rounded-lg-3" src="/Futrono-1.jpeg" alt="" width="300" />
				</div>
			</div>
		</div>
	);
};

export default Carrusel;
