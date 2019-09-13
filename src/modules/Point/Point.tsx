import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as RBS from 'react-bootstrap';
import './Point.css';
import AddModalsPoint from '../../component/modals/AddModalsPoint';

type PointState = {
	show: boolean;
}
const points = {
	vars: [
		{id: 1, value: 'Переменный посторонний потенциал между проводом А и Земля(AC_AG)', points: [1, 2, 3]},
		{id: 2, value: 'Переменный посторонний потенциал между проводом B и Земля(AC_BG)', points: [1, 2, 3]},
		{id: 3, value: 'Переменный посторонний потенциал между проводами A и B(AC_AB)', points: [1, 2, 3]},
		{id: 4, value: 'Постоянный посторонний потенциал между проводом А и Земля(DC_AG)', points: [4, 5, 1, 2, 3]},
		{id: 5, value: 'Постоянный посторонний потенциал между проводом B и Земля(DC_BG)', points: [4, 5, 1, 2, 3]},
		{id: 6, value: 'Постоянный посторонний потенциал между проводами A и B(DC_AB)', points: [4, 5, 1, 2, 3]},
		{id: 7, value: 'Емкость между проводом А и Земля(C_AG)', points: [2, 6]},
		{id: 8, value: 'Емкость между проводом B и Земля(C_BG)', points: [2, 6]},
		{id: 9, value: 'Емкость между проводами А и B(C_AB)', points: [2, 6, 7, 8, 9, 10, 11]},
		{id: 10, value: 'Сопротивление между проводом А и Земля(R_AG)', points: [2, 12, 13, 14, 15, 16]},
		{id: 11, value: 'Сопротивление между проводом B и Земля(R_BG)', points: [2, 12, 13, 14, 15, 16]},
		{id: 12, value: 'Сопротивление между проводами A и B(R_AB)', points: [2, 12, 13, 14, 15, 16]}
	],
	points: [
		{id: 1, value: '0'},
		{id: 2, value: '1'},
		{id: 3, value: '65'},
		{id: 4, value: '-1'},
		{id: 5, value: '-65'},
		{id: 6, value: '10'},
		{id: 7, value: '1200'},
		{id: 8, value: '500'},
		{id: 9, value: '60'},
		{id: 10, value: '70'},
		{id: 11, value: '700'},
		{id: 12, value: '1000'},
		{id: 13, value: '1000000'},
		{id: 14, value: '150000'},
		{id: 15, value: '5000000'},
		{id: 16, value: '900000'},
	]
}
export default class Point extends React.Component<{}, PointState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			show: false
		};
	}
	public render() {
		return (
			<RBS.Col lg={10} className="cl10">
				<AddModalsPoint
					show={this.state.show}
					onHide={
						() => this.setState({show: false})}	
				/>
				<RBS.Table striped={true} bordered={true} condensed={true} hover={true}>
					<caption>Точки</caption>
					<thead>
					<tr>
						<th>Переменная</th>
						<th>Значение</th>
					</tr>
					</thead>
					<tbody>
					{points.vars.map((po, i) => {
						const point = po.points.map(p => points.points.find(pp => pp.id === p))
						return (
							<tr key={i}>
								<td>{po.value}</td>
								<td><a>{point.map(p => p.value).join(', ')}</a></td>
							</tr>
						)
					})}
					</tbody>
				</RBS.Table>
				<RBS.Button
					bsStyle="primary"
					onClick={() => this.setState({show: true})}
				>
					Нажмите что бы добавить новую точку
				</RBS.Button>
			</RBS.Col>
		);
	}
}