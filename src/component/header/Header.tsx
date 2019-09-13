import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import '../../../package.json'
import Login from '../login/login';

type HeaderState = {
	show: boolean
};

export default class Header extends React.Component <{}, HeaderState> {
	constructor (props: HeaderState) {
		super(props);
		this.state = {
			show: false,
		};
	}
	
	render() {
		let name = require('../../../package.json').name
		let version = require('../../../package.json').version
		return (
			<RBS.Nav className="nav">
				<Login
					show={this.state.show}
					onHide={
					() => this.setState({show: false})}
				/>
				<RBS.Col lg={9} className="cl9"><a href="./App.tsx">{name} {version}</a></RBS.Col>
				<RBS.Col lg={3} className="cl3">
					<RBS.NavDropdown className="drop" title="Меню" id="nav-dropdown">
						<RBS.MenuItem onClick={() => this.setState({show: true})}>Профиль</RBS.MenuItem>
						<RBS.MenuItem>Выйти</RBS.MenuItem>
					</RBS.NavDropdown>
				</RBS.Col>
			</RBS.Nav>
		);
	}
}