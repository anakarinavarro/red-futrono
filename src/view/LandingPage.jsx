import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from '../components/Footer';
import logo from '../../src/logo.png';
import comercio from '../../src/comercio.png';
import beneficios from '../../src/beneficios.png';

const LandingPage = () => {
	const phoneUrl = 'https://wa.me/56962022993';
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<img src={logo} alt="" width="200" />
					</div>
					<div className="container my-2">
						<div className="row align-items-md-stretch">
							<div className="col-md-7 p-3 p-lg-5 pt-lg-3">
								<h1 className="display-4 fw-bold lh-1">
									Súmate a la Red de contactos más grande <br />
									de Futrono
								</h1>
								<p className="lead">
									Red Futrono es un servicio a la comunidad que tiene como
									objetivo digitalizar la información y activar el comercio local.
								</p>
								<button className="btn btn-primary">
									{' '}
									<a href={phoneUrl}>
										<WhatsAppIcon />
										<span className="ms-2 d-inline-block">
											Quiero participar
										</span>
									</a>
								</button>
							</div>
							<div className="col-md-5 p-0">
								<img className="rounded-lg-3 img-fluid" src={comercio} alt="" />
							</div>
						</div>
					</div>
					<div className="col-md-8 mb-3">
						<div className="h-100 p-5 text-bg-dark rounded-3 d-md-flex">
							<div className="col-md-5 col pe-md-5">
								<img className="rounded-lg-3 img-fluid" src={beneficios} alt="" />
							</div>
							<div className="col-md-7 col">
								<h2>Beneficios de pertenecer a Red Futrono</h2>
								<p>
									<li> Nuevos clientes te encontrarán en línea.</li>
									<li>
										Permite que tu marca o servicio aparezcan cuando alguien
										busque la categoría.
									</li>
									<li> Obten mejores resultados para tu negocio.</li>
									<li> Vender a todo Chile.</li>
									<li>
										Oportunidad de ocupar la técnología digital a favor de tu
										negocio.
									</li>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-3">
						<div className="h-100 p-5 bg-light border rounded-3 ">
							<h2>¿Cómo funciona?</h2>
							<p>
								Nuestro proyecto ocupa tecnología de posicionamiento web y anuncios
								de <strong>Google Ads</strong>, lo que permite estar visible en las
								búsquedas de clientes en internet. Tenemos más de 10 años de
								experiencia en marketing digital.
							</p>
							<div className="card w-100">
								<div className="card-body">
									<p className="card-text">
										Trabajemos en colaboración, al inscribirte tu aporte nos
										permite financiar las campañas para lograr tener más
										presencia.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default LandingPage;
