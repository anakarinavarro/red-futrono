import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Delivery = () => {
	const [delivery, setDelivery] = React.useState([]);

	React.useEffect(() => {
		obtenerDelivery();
	}, []);

	const obtenerDelivery = async () => {
		const data = await fetch('./Delivery.json');
		const dataDelivery = await data.json();

		setDelivery(dataDelivery);
	};
	return (
		<div className="container">
			<div className="row">
				{delivery.map((item) => (
					<div className="container col-12 col-md-3">
						<div className="card">
							<img src={item.img} className="card-img-top" alt="algo" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Ofrece: {item.descripcion}</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Dirección: {item.adress}</li>
								<li className="list-group-item">
									Horario de atención: {item.horario}
								</li>
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

export default Delivery;
