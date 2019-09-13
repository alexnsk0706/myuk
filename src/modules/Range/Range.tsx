import 'bootstrap/dist/css/bootstrap.css';
import *as React from 'react';
import * as RBS from 'react-bootstrap';
import './Range.css';
import AddModalsRange from '../../component/modals/AddModalsRange';
type RangeState = {
	// range: [{id: 1, value: 'Емкость между проводом А и Земля'}];
	show: boolean;
}
const range = {
	ranges: [
		{id: 1, value: 'Емкость между проводом А и Земля'},
		{id: 2, value: 'Емкость между проводом B и Земля'},
		{id: 3, value: 'R между проводами A и B 1 Ом-1 КОм'},
		{id: 4, value: 'R между проводами A и B 1 КОм-150КОм'},
		{id: 5, value: 'R между проводами A и B 150 КОм-1МОм'},
		{id: 6, value: 'R между проводами A и B 1 МОм-5 МОм'},
		{id: 7, value: 'R между проводом А и земля 1 Ом-1 КОм'},
		{id: 8, value: 'R между проводом А и земля 1 КОм-150 КОм'},
		{id: 9, value: 'R между проводом А и земля 150 КОм-1 МОм'},
		{id: 10, value: 'R между проводом А и земля 1 МОм-5 МОм'},
		{id: 11, value: 'R между проводом В и земля 1 Ом-1 КОм'},
		{id: 12, value: 'R между проводом В и земля 1 КОм-150 КОм'},
		{id: 13, value: 'R между проводом В и земля 150 КОм-1 МОм'},
		{id: 14, value: 'R между проводом В и земля 1 МОм-5 МОм'},
		{id: 15, value: 'Постоянное U между проводами А и В 1-65В'},
		{id: 16, value: 'Постоянное U между проводами А и В >65 В'},
		{id: 17, value: 'Постоянное U между проводами А и G 1-65В'},
		{id: 18, value: 'Постоянное U между проводами А и G>65В'},
		{id: 19, value: 'Постоянное U между проводами B и G 1-65В'},
		{id: 20, value: 'Постоянное U между проводами В и G >65В'},
		{id: 21, value: 'Переменное U между проводами А и В >65В'},
		{id: 22, value: 'Переменное U между проводом А и G >65В'},
		{id: 23, value: 'Переменное U между проводом В и G >65В'},
		{id: 24, value: 'Переменное U между проводами А и В 1-65B'},
		{id: 25, value: 'Переменное U между проводами А и G 1-65В'},
		{id: 26, value: 'Переменное U между проводом В и G 1-65В'},
		{id: 27, value: 'Постоянное U между проводами А и В <0 В'},
		{id: 28, value: 'Постоянное U между проводом А и G <0 В'},
		{id: 29, value: 'Постоянное U между проводом В и G <0 В'},
		{id: 30, value: 'Идеальные параметры линии'},
		{id: 31, value: 'ИЗОЛЯЦИЯ В НОРМЕ'},
		{id: 32, value: '= U между проводами А и В -1 до -65В'},
		{id: 33, value: '= U между проводами А и G -1 до -65В'},
		{id: 34, value: '= U между проводами B и G -1 до -65В'},
		{id: 35, value: '= U между проводами А и В <-65В'},
		{id: 36, value: '= U между проводами А и G < -65В'},
		{id: 37, value: '= U между проводами B и G <-65В'},
		{id: 38, value: 'Емкость между проводами А и В 1-10'},
		{id: 39, value: 'Емкость между проводами А и В 10-60'},
		{id: 40, value: 'Емкость между проводами А и В 60-70'},
		{id: 41, value: 'Емкость между проводами А и В 500-700'},
		{id: 42, value: 'Емкость между проводами А и В 700-1200'}
	]
}
export default class Condition extends React.Component<{}, RangeState> {
	constructor(props: RangeState) {
		super(props);
		this.state = {
			show: false
		};
	}
	public render() {
		return (
			<RBS.Col lg={10} className="cl10">
				<AddModalsRange
					show={this.state.show}
					onHide={
						() => this.setState({show: false})}	
				/>
				<RBS.Table striped={true} bordered={true} condensed={true} hover={true}>
					<caption>Диапазон</caption>
					<thead>
					<tr>
						<th>Диапазон</th>
						<th>Удалить</th>
					</tr>
					</thead>
					<tbody>
						{range.ranges.map((r, i) => {
							return (
								<tr key={i}>
									<td><a>{r.value}</a></td>
									<td><button className="glyphicon glyphicon-remove-circle" title="Удалить диапазон"/></td>
								</tr>
							)
						})}
					</tbody>
				</RBS.Table>
				<RBS.Button
					bsStyle="primary"
					onClick={() => this.setState({show: true})}
				>
					Нажмите что бы добавить новый диапазон
				</RBS.Button>
			</RBS.Col>
		);
	}
}