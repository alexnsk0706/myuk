import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
type MainState = {
	id: number;
}
const data = {
	state: [
		{id: 1, value: 'Возможно Кнопочный ТА', condition: [1, 2, 3], resolves: [1]},
		{id: 2, value: 'Возможно Дисковый ТА', condition: [6, 7, 8, 9], resolves: [10]},
		{id: 3, value: 'Возможно Радиотелефон', condition: [10, 11, 12], resolves: [11]},
		{id: 4, value: 'Сообщение', condition: [4], resolves: [2, 3, 4, 5, 6, 7]},
		{id: 5, value: 'Земля', condition: [5], resolves: [8, 9]},
		{id: 6, value: 'Все параметры в норме', condition: [13], resolves: [12]}
	],
	condition: [
		{id: 1, value: 'Уточнить тип ТА'},
		{id: 2, value: 'ТА Исправен?'},
		{id: 3, value: 'Закрыть заявку'},
		{id: 4, value: 'Предать в линейных цех'},
		{id: 5, value: 'Передать в КРОСС'},
		{id: 6, value: 'Уточнить тип ТА'},
		{id: 7, value: 'Подключены доп. устройства - млодем, факс, другие?'},
		{id: 8, value: 'ТА Исправен?'},
		{id: 9, value: 'Закрыть заявку'},
		{id: 10, value: 'Уточнить тип ТА'},
		{id: 11, value: 'ТА Исправен?'},
		{id: 12, value: 'Закрыть заявку'},
		{id: 13, value: 'Записи отсутствуют'}
	],
	resolves: [
		{id: 1, value: 'Емкость между проводами А и В 500-900'},
		{id: 2, value: 'Постоянное U между проводами А и В 1-65В'},
		{id: 3, value: 'Постоянное U между проводами А и G 1-65В'},
		{id: 4, value: 'Постоянное U между проводами B и G 1-65В'},
		{id: 5, value: '= U между проводами А и В -1 до -65В'},
		{id: 6, value: '= U между проводами А и G -1 до -65В'},
		{id: 7, value: '= U между проводами B и G -1 до -65В'},
		{id: 8, value: 'R между проводом А и земля 1 Ом-1 КОм'},
		{id: 9, value: 'R между проводом B и земля 1 Ом-1 КОм'},
		{id: 10, value: 'Емкость между проводами А и В 700-1200'},
		{id: 11, value: 'Емкость между проводами А и В 60-70'},
		{id: 12, value: 'Идеальные параметры линии'}
	]
}
console.log(data)
export default class Main extends React.Component <{}, MainState> {
	constructor(props: MainState) {
		super(props);
		this.state = {
			id: null,
		};
	}
hChande = (e: React.FormEvent<RBS.FormControl>) => {
	let stateid = parseInt((e.target as HTMLSelectElement).value, 10)
	if (isNaN(stateid)) {stateid = null}
	this.setState ( {id: stateid} )
}
	public render () {
		return (
			<RBS.Col lg={10} className="cl10">
				<RBS.Table striped={true} bordered={true} condensed={true} hover={true} style={{border: '5'}}>
					<thead>
						<tr>
							<th>
								Состояния:
								<RBS.FormGroup controlId="formControlsSelect" style={{width: '350px', float: 'right'}}>
									<RBS.FormControl componentClass="select" onChange={this.hChande}>
										<option value="">Все состояние</option>
										{data.state.map((st, i) => 
										<option value={st.id} key={i}>{st.value}</option>
										)}
									</RBS.FormControl>
								</RBS.FormGroup>
							</th>
							<th>Решения</th>
							<th>Условия:
							<RBS.FormGroup controlId="formControlsSelect" style={{width: '350px', float: 'right'}}>
								<RBS.FormControl componentClass="select">
									<option>Условия</option>
									<option>...</option>
								</RBS.FormControl>
							</RBS.FormGroup>
							</th>
						</tr>
					</thead>
					<tbody>
					{data.state.map((s, i) => {
						// 1 - 1 state, 1 res, 1 cond
						// 2 - 1 state, 2 res, 1 cond
						// 3 - 1 state, 1 res, 2 cond 
						if (this.state.id !== null && this.state.id !== s.id) {return null}
						const maxTR = (s.condition.length > s.resolves.length) ? s.condition.length : s.resolves.length 					 
						console.log('max: ' + maxTR) 
						if (maxTR === 1) { return null } 
						let addTRs: JSX.Element[] =  [] 
						if (maxTR > 1) { 
							for (let index = 1; index < maxTR; index++) {  
								const cond = (data.condition[index]) ?  s.condition[s.condition[index] ] : null 
								// const cond = (s.condition[index]) ? data.condition[s.condition[index]] : null 
								const res = (data.resolves[index]) ? s.resolves[s.resolves[index]] : null
								// const res = (s.resolves[index]) ? data.resolves[s.resolves[index]] : null 
								// const condTD = <td/>  
								// const resTD = <td/>
								const condTD = (s.condition[index])  
								? (<td key={'tdc' + index + i}>{cond}</td>)  
								: (<td key={'tdc' + index + i}  />) 
								const resTD = (s.resolves[index])  
								? (<td key={'tdr' + index + i}>{res}</td>)  
								: (<td key={'tdr' + index + i}  />) 
								addTRs.push(<tr key={'tr' + index + i}>{condTD}{resTD}</tr>) 
							} 
						} 
						console.log(addTRs[0]) 
						return ( 
							<React.Fragment key={i}> 
								<tr key={'tr1' + i}> 
									<td rowSpan={maxTR}>{s.value}</td> 
									<td>{s.condition[0]}</td> 
									<td>{s.resolves[0]}</td> 
								</tr> 
								{(maxTR > 1) ? addTRs : null} 
							</React.Fragment> 
						)
						{/* // if (this.state.id !== null && this.state.id !== s.id) {return null} */}
						{/* // const conditions = s.conditions.map(c => data.condition.find(dc => dc.id === c)) */}
						{/* // const revolves = s.resolves.map(r => data.resolves.find(dr => dr.id === r)) */}
						{/* // return ( */}
						{/* // 	<tr key={i}> */}
						{/* // 		<td style={{width: '430px'}}>{s.value}</td> */}
						{/* // 		<td style={{width: '430px'}}>{conditions.map(c => c.value).join(', ')}</td> */}
						{/* // 		<td style={{width: '430px'}}>{revolves.map(r => r.value).join(', ')}</td> */}
						{/* // 	</tr> */}
						{/* // ) */}
					})}
					</tbody>
				</RBS.Table>
			</RBS.Col>
		);
	}
}