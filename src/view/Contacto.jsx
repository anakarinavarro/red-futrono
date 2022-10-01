import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Contacto = () => {
	const phoneUrl = 'https://wa.me/56951251963';
	const mailto = 'mailto:anakarina.stratus@gmail.com';
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						src="img/code.jpeg"
						height="500"
						className="align-self-center shadow rounded p-2 code"
						alt="mi foto"
					/>
				</div>
				<div className="col-12 col-md-6">
					<h1>¿Quieres ser parte de RedFutrono y publicar tu negocio o servicio?</h1>
					<h2>Envianos un mensaje al WhatsApp o escribenos al correo electronico</h2>
					<h4>Aporte $2.000 pesos chilenos por 1 año</h4>
					<p>
						<a href={mailto}>
							<EmailIcon /> digitalranco@gmail.com
						</a>
					</p>
					<p>
						<PlaceIcon /> Futrono <br /> Region de Los Ríos, Chile
					</p>
					<p>
						<a href={phoneUrl}>
							<WhatsAppIcon /> +569 5125 19 63
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contacto;
