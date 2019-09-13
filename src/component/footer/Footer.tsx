import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'

export const Footer: React.FC = () => {
	return (
		<footer>
			<RBS.Col lg={12} className="footerCL12">
				<p>© Техноград плюс, 2019</p>
			</RBS.Col>
		</footer>
	)
}