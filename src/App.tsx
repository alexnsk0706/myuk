import * as React from 'react';
import './App.css';
import * as RBS from 'react-bootstrap';
import * as IC from './component/IndexComponent'
import 'bootstrap/dist/css/bootstrap.css';

export const App: React.FC = () => {

	return (
		<RBS.Grid fluid={true} className="cf">
			<IC.Header/>
			<IC.Sidebar/>
			<IC.Main/>
			<IC.Footer/>
		</RBS.Grid>
	)
}