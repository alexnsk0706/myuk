import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as RBS from 'react-bootstrap';
import './Condition.css';
import AddModalsCondition from '../../component/modals/AddModalsCondition';

type ConditionState = {
	show: boolean
}
const condition = {
	shortname: [
		{id: 1, value: 'problem_12', objecstate: [1]},
		{id: 2, value: 'problem_14', objecstate: [2]},
		{id: 3, value: 'problem_15', objecstate: [3]},
		{id: 4, value: 'problem_16', objecstate: [4]},
		{id: 5, value: 'problem_18', objecstate: [5]},
		{id: 6, value: 'problem_23', objecstate: [6]},
		{id: 7, value: 'problem_24', objecstate: [7]},
		{id: 8, value: 'problem_25', objecstate: [8]},
		{id: 9, value: 'problem_27', objecstate: [9]},
		{id: 10, value: 'problem_32', objecstate: [10]},
		{id: 11, value: 'problem_35', objecstate: [11]},
		{id: 12, value: 'problem_36', objecstate: [12]},
		{id: 13, value: 'problem_37', objecstate: [13]},
		{id: 14, value: 'problem_38', objecstate: [14]},
		{id: 15, value: 'problem_39', objecstate: [15]},
		{id: 16, value: 'problem_40', objecstate: [16]},
		{id: 17, value: 'problem_41', objecstate: [17]},
		{id: 18, value: 'problem_42', objecstate: [18]},
		{id: 19, value: 'problem_43', objecstate: [19]},
		{id: 20, value: 'problem_44', objecstate: [20]}
	],
	objecstate: [
		{id: 1, value: 'СООБЩЕНИЕ'},
		{id: 2, value: 'ПОСТОРОНЕЕ НАПРЯЖЕНИЕ'},
		{id: 3, value: 'ОБРЫВ на станции'},
		{id: 4, value: 'ОБРЫВ на линии'},
		{id: 5, value: 'КОРОТКОЕ ЗАМЫКАНИЕ'},
		{id: 6, value: 'ЗЕМЛЯ'},
		{id: 7, value: 'Неполная ЗЕМЛЯ'},
		{id: 8, value: 'ПОНИЖЕННАЯ ИЗОЛЯЦИЯ'},
		{id: 9, value: 'Неполное КОРОТКОЕ'},
		{id: 10, value: 'Линия в некорректном состоянии'},
		{id: 11, value: 'ЗЕМЛЯ/КОРОТКОЕ'},
		{id: 12, value: 'ЗЕМЛЯ/КОРОТКОЕ/СООБЩЕНИЕ'},
		{id: 13, value: 'ЗЕМЛЯ (жила А)'},
		{id: 14, value: 'ЗЕМЛЯ (жила В)'},
		{id: 15, value: 'Возможно "Дисковый ТА"'},
		{id: 16, value: 'Возможно "Кнопочный ТА"'},
		{id: 17, value: 'Возможно "Радиотелефон"'},
		{id: 18, value: 'Все параметры в норме'},
		{id: 19, value: 'ИЗОЛЯЦИЯ В НОРМЕ'},
		{id: 20, value: 'норма'}
	]
}

export default class Condition extends React.Component<{}, ConditionState> {
	constructor (props: ConditionState) {
		super(props);
		this.state = {
			show: false,
		};
	}
	public render() {
		return (
			<RBS.Col lg={10} className="cl10">
				<AddModalsCondition
					show={this.state.show}
					onHide={() => this.setState({show: false})}	
				/>
				<RBS.Table striped={true} bordered={true} condensed={true} hover={true}>
					<caption>Состояния</caption>
					<thead>
					<tr>
						<th>Краткое имя</th>
						<th>Состояние объекта</th>
						<th>Удалить</th>
					</tr>
					</thead>
					<tbody>
					{condition.shortname.map((o, i) => {
						const objecstates = o.objecstate.map(ob => condition.objecstate.find(co => co.id === ob))
						return (
							<tr key={i}>
								<td>{o.value}</td>
								<td><a>{objecstates.map(ob => ob.value).join(', ')}</a></td>
								<td><button className="glyphicon glyphicon-remove-circle" title="Удалить состояния"/></td>
							</tr>
						)
					})}					
					</tbody>
				</RBS.Table>
				<RBS.Button
					bsStyle="primary"
					onClick={() => this.setState({show: true})}
				>
					Нажмите что бы добавить новое состояние
				</RBS.Button>
			</RBS.Col>
		);
	}
}