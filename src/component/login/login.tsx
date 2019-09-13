import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../login/login.css';

type login = {
	show: boolean
	onHide: () => void
}

export default class Login extends React.Component <login> {
	constructor(props: login) {
		super(props);
	}

	public render() {
		return(
		<RBS.Modal
			show={this.props.show}
			onHide={this.props.onHide}
			className="rform"
		>
			<RBS.Modal.Header>
				<RBS.Modal.Title>
					<h2 className="autor">Авторизация</h2>
				</RBS.Modal.Title>
			</RBS.Modal.Header>
			<RBS.Modal.Body>
				<h5 className="log">Логин:</h5>
				<input className="inpt" type="text" placeholder="mail@example.com"/>
				<br/>
				<h5>Пароль:</h5>
				<input className="inpt" type="password"/>
			</RBS.Modal.Body>
				<br/>
				<br/>
			<RBS.Modal.Footer>
				<RBS.Button
					className="RBtn"
					onClick={this.props.onHide}
				><a href="./Sidebar.tsx">Вход</a>
				</RBS.Button>
			</RBS.Modal.Footer>
		</RBS.Modal>
		);
	}
}