import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as RBS from 'react-bootstrap'
import AddModalsDecision from '../../component/modals/AddModalsDecision';

type DecisionState = {
	show: boolean;
}
const decision = {
	shortname: [
		{id: 1, value: 'CLOSE', decisions: [1]},
		{id: 2, value: 'In cross', decisions: [2]},
		{id: 3, value: 'In Line', decisions: [3]},
		{id: 4, value: 'RETURN', decisions: [1]},
		{id: 5, value: 'suggest_26', decisions: [2]},
		{id: 6, value: 'suggest_29', decisions: [3]},
		{id: 7, value: 'suggest_30', decisions: [1]},
		{id: 8, value: 'suggest_31', decisions: [2]},
		{id: 9, value: 'suggest_32', decisions: [3]},
		{id: 10, value: 'suggest_33', decisions: [1]},
		{id: 11, value: 'suggest_34', decisions: [2]},
		{id: 12, value: 'suggest_35', decisions: [3]},
		{id: 13, value: 'suggest_36', decisions: [3]}
	],
	decisions: [
		{id: 1, value: '(0003) Закрыть заявку'},
		{id: 2, value: 'Передать в КРОСС'},
		{id: 3, value: 'Передать в ЛИНЕЙНЫЙ ЦЕХ'},
		{id: 4, value: 'Выполнить повторное измерение'},
		{id: 5, value: 'Уточнить тип ТА'},
		{id: 6, value: 'ТА включен в розетку?'},
		{id: 7, value: 'Комнатная проводка повреждена?'},
		{id: 8, value: 'ТА исправен?'},
		{id: 9, value: 'Количество подключенных ТА?'},
		{id: 10, value: 'Подключены доп. устройства-модем, факс, другие?'},
		{id: 11, value: 'Подключена пультовая охрана?'},
		{id: 12, value: 'Отключить ТА, подключать поочередно'},
		{id: 13, value: 'Отключить ТА'}
	]
}

export default class Decision extends React.Component<{}, DecisionState> {

	constructor(props: DecisionState) {
		super(props);
		
		this.state = {
			show: false,
		};
	}
	// onDelete(item: any) {
	// 	this.state.shortname.splice(this.state.shortname.indexOf(item), 1);
	// 	this.setState({shortname: this.state.shortname});
	// }

	public render() {			
		return (
			<RBS.Col lg={10} className="cl10">
				<AddModalsDecision
					show={this.state.show}
					onHide={
						() => this.setState({show: false})}	
				/>
				<RBS.Table striped={true} bordered={true} condensed={true} hover={true}>
					<caption>Решения</caption>
					<thead>
					<tr>
						<th>Краткое имя</th>
						<th>Решение</th>
						<th>Удалить</th>
					</tr>
					</thead>
					<tbody>
						{decision.shortname.map((s, i) => {
							const decisions = s.decisions.map(d => decision.decisions.find(dd => dd.id === d))
							return (
								<tr key={i}>
									<td>{s.value}</td>
									<td><a>{decisions.map(d => d.value).join(', ')}</a></td>
									<td><button className="glyphicon glyphicon-remove-circle" title="Удалить решеие"/></td>
								</tr>
							)
						})}
					</tbody>
				</RBS.Table>
				<RBS.Button
					bsStyle="primary"
					onClick={() => this.setState({show: true})}
				>
					Нажмите что бы добавить новое решение
				</RBS.Button>
			</RBS.Col>
		);
	}
}