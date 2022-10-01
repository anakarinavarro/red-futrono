import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../src/favicon.png';

const Footer = () => {
	const instaUrl = 'https://www.instagram.com/digitalranco/';
	const faceUrl = 'https://m.facebook.com/digitalranco/';

	return (
		<>
			<footer className="d-md-flex flex-wrap justify-content-md-between justify-content-center align-items-center py-3 px-3 my-4 border-top">
				<p className="col-md-4 mb-0 text-muted">© 2022 Digital Ranco</p>

				<a
					href="/"
					className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
				>
					<img src={logo} alt="red" width="30" />
				</a>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<a href={faceUrl} className="me-4 text-reset">
							<FacebookIcon />
						</a>
					</li>
					<li className="nav-item">
						<a href={instaUrl} className="me-4 text-reset">
							<InstagramIcon />
						</a>
						<div></div>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
