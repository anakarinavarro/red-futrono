import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Emprendimientos = () => {
	const phoneUrl = 'https://wa.me/56951251963';
	const mailto = 'mailto:anakarina.stratus@gmail.com';
	return (
		<div className="container">
			<div className="row">
				<div className="container col-12 col-md-3">
					<div className="card">
						<img src="{item.img}" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">nombre</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Balmaceda 777 </li>
							<li className="list-group-item">
								Horario de atención: Lunes a viernes de 10:OO a 18:00 hrs
							</li>
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
				</div>
			</div>
		</div>
	);
};

export default Emprendimientos;
