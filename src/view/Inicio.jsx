import React from 'react';
import Carrusel from '../components/Carrusel';
import { Link } from 'react-router-dom';

const Inicio = () => {
	const [categoria, setCategoria] = React.useState([]);

	React.useEffect(() => {
		obtenerCategorias();
	}, []);

	const obtenerCategorias = async () => {
		const data = await fetch('./categorias.json');
		const dataCategorias = await data.json();

		setCategoria(dataCategorias);
	};

	return (
		<>
			<div className="container">
				<Carrusel />
			</div>
			<br />
			<div className=" col-12 text-center">
				<h1>Encuentra servicios, oficios y comercio futronino</h1>
			</div>
			<div className="container">
				<div className="row">
					{categoria.map((item) => (
						<div className="card mb-5 col mx-3" key={item.id}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title" key="item.id">
									{item.name}
								</h5>
								<p className="card-text">{item.descripcion}</p>
								<div class="d-grid gap-2">
									<Link className="btn btn-outline-primary" to={item.url}>
										Buscar
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Inicio;
