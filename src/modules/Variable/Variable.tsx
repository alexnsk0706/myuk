import * as React from 'react';
import * as RBS from 'react-bootstrap';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Variable.css';
import AddModalsVariable from '../../component/modals/AddModalsVariable';
type VariableState = {
	show: boolean;
}
const variable = {
	fullname: [
		{id: 1, value: 'xsl_AB_AcForeignVoltage', shortname: [1], description: [1], dimension: [1]},
		{id: 2, value: 'xsl_AG_AcForeignVoltage', shortname: [2], description: [2], dimension: [1]},
		{id: 3, value: 'xsl_BG_AcForeignVoltage', shortname: [3], description: [3], dimension: [1]},
		{id: 4, value: 'xsl_AB_Capacity', shortname: [4], description: [4], dimension: [2]},
		{id: 5, value: 'xsl_AG_Capacity', shortname: [5], description: [5], dimension: [2]},
		{id: 6, value: 'xsl_BA_Capacity', shortname: [6], description: [6], dimension: [2]},
		{id: 7, value: 'xsl_BG_Capacity', shortname: [7], description: [7], dimension: [2]},
		{id: 8, value: 'xsl_AB_DcForeignVoltage', shortname: [8], description: [8], dimension: [1]},
		{id: 9, value: 'xsl_AG_DcForeignVoltage', shortname: [9], description: [9], dimension: [1]},
		{id: 10, value: 'xsl_BG_DcForeignVoltage', shortname: [10], description: [10], dimension: [1]},
		{id: 11, value: 'xsl_AB_InsulationResistance', shortname: [11], description: [11], dimension: [3]},
		{id: 12, value: 'xsl_AG_InsulationResistance', shortname: [12], description: [12], dimension: [3]},
		{id: 13, value: 'xsl_BA_InsulationResistance', shortname: [13], description: [13], dimension: [3]},
		{id: 14, value: 'xsl_BG_InsulationResistance', shortname: [14], description: [14], dimension: [3]}
	],
	shortname: [
		{id: 1, value: 'AC_AB'},
		{id: 2, value: 'AC_AG'},
		{id: 3, value: 'AC_BG'},
		{id: 4, value: 'C_AB'},
		{id: 5, value: 'C_AG'},
		{id: 6, value: 'C_BA'},
		{id: 7, value: 'C_BG'},
		{id: 8, value: 'DC_AB'},
		{id: 9, value: 'DC_AG'},
		{id: 10, value: 'DC_BG'},
		{id: 11, value: 'R_AB'},
		{id: 12, value: 'R_AG'},
		{id: 13, value: 'R_BA'},
		{id: 14, value: 'R_BG'}
	],
	description: [
		{id: 1, value: 'Переменный посторонний потенциал между проводами A и B'},
		{id: 2, value: 'Переменный посторонний потенциал между проводом А и Земля'},
		{id: 3, value: 'Переменный посторонний потенциал между проводом B и Земля'},
		{id: 4, value: 'Емкость между проводами А и B'},
		{id: 5, value: 'Емкость между проводом А и Земля'},
		{id: 6, value: 'Емкость между проводами B и A'},
		{id: 7, value: 'Емкость между проводом B и Земля'},
		{id: 8, value: 'Постоянный посторонний потенциал между проводами A и B'},
		{id: 9, value: 'Постоянный посторонний потенциал между проводом А и Земля'},
		{id: 10, value: 'Постоянный посторонний потенциал между проводом B и Земля'},
		{id: 11, value: 'Сопротивление между проводами A и B'},
		{id: 12, value: 'Сопротивление между проводом А и Земля'},
		{id: 13, value: 'Сопротивление между проводами B и A'},
		{id: 14, value: 'Сопротивление между проводом B и Земля'}
	],
	dimension: [
		{id: 1, value: 'В'},
		{id: 2, value: 'мкФ'},
		{id: 3, value: 'Ом'}
	]
}
export default class Variable extends React.Component<{}, VariableState> {
	constructor(props: VariableState) {
		super(props);

		this.state = {
			show: false
		};
	}

	public render() {
		return (
			<RB.Col lg={10} className="cl10">
				<AddModalsVariable
					show={this.state.show}
					onHide={
						() => this.setState({show: false})}	
				/>
				<RBS.Table bordered={true} hover={true} striped={true}>
				<caption>Переменная</caption>
					<thead>
						<tr>
							<th>ПОЛНОЕ ИМЯ</th>
							<th>КРАТКОЕ ИМЯ</th>
							<th>ОПИСАНИЕ</th>
							<th>РАЗМЕРНОСТЬ/ВЫРАЖЕНИЕ</th>
							<th>УДАЛИТЬ</th>
						</tr>
					</thead>
					<tbody>
						{variable.fullname.map((f, i) => {
							const short = f.shortname.map(s => variable.shortname.find(vs => vs.id === s))
							const descr = f.description.map(d => variable.description.find(vd => vd.id === d))
							const dimen = f.dimension.map(di => variable.dimension.find(vdi  => vdi.id === di))
							return (
								<tr key={i}>
									<td>{f.value}</td>
									<td>{short.map(s => s.value).join(',')}</td>
									<td>{descr.map(d => d.value).join(',')}</td>
									<td>{dimen.map(di => di.value).join(',')}</td>
									<td/>
								</tr>
							)
						})}
					</tbody>
				</RBS.Table>
				<RBS.Button
					bsStyle="primary"
					onClick={() => this.setState({show: true})}
				>
					Нажмите что бы добавить новую переменную
				</RBS.Button>
			</RB.Col>
		);
	}
}