import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Oficios = () => {
	const [oficios, setOficios] = React.useState([]);

	React.useEffect(() => {
		obtenerOficios();
	}, []);

	const obtenerOficios = async () => {
		const data = await fetch('./Oficios.json');
		const dataOficios = await data.json();

		setOficios(dataOficios);
	};
	return (
		<div className="container">
			<div className="row">
				{oficios.map((item) => (
					<div className="container col-12 col-md-3">
						<div className="card">
							<img src={item.img} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Servicio: {item.descripcion}</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Contacta a: {item.anfitrion} </li>
								<li className="list-group-item">Dirección: {item.adress}</li>
							</ul>
							<div className="card-body">
								<a href={item.phone} className="card-link">
									<WhatsAppIcon />
								</a>
								<a href={item.red} className="card-link">
									<InstagramIcon />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Oficios;
