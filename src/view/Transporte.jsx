import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Transporte = () => {
	const [transporte, setTransporte] = React.useState([]);

	React.useEffect(() => {
		obtenerTransporte();
	}, []);

	const obtenerTransporte = async () => {
		const data = await fetch('./Transporte.json');
		const dataTransporte = await data.json();

		setTransporte(dataTransporte);
	};
	return (
		<div className="container">
			<div className="row">
				{transporte.map((item) => (
					<div className="container col-12 col-md-3">
						<div className="card">
							<img src={item.img} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.nombre}</h5>
								<p className="card-text">{item.descripcion}</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Paradero: {item.adress} </li>
								<li className="list-group-item">Horarios: {item.horario}</li>
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

export default Transporte;
