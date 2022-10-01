import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Turismo = () => {
	const phoneUrl = 'https://wa.me/56951251963';
	const mailto = 'mailto:anakarina.stratus@gmail.com';

	const [turismo, setTurismo] = React.useState([]);

	React.useEffect(() => {
		obtenerTurismo();
	}, []);

	const obtenerTurismo = async () => {
		const data = await fetch('./Turismo.json');
		const dataTurismo = await data.json();

		setTurismo(dataTurismo);
	};

	return (
		<div className="container">
			<div className="row">
				{turismo.map((item) => (
					<div className="card mb-5 col-md-3 mx-3" key={item.id}>
						<img src={item.img} className="card-img-top" alt="algo" />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.descripcion}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{item.adress} </li>
							<li className="list-group-item">{item.horario}</li>
						</ul>
						<div className="card-body">
							<a href={phoneUrl} className="card-link">
								<WhatsAppIcon />
							</a>
							<a href={mailto} className="card-link">
								<InstagramIcon />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Turismo;
