import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type AddModalsRangeProps = {
	show: boolean
	onHide: () => void
}
export default class AddModalsRange extends React.Component <AddModalsRangeProps> {

	constructor(props: AddModalsRangeProps) {

		super(props);
	}

	public render() {
		return (
			<RBS.Modal
				show={this.props.show}
				onHide={this.props.onHide}
				dialogClassName="custom-modal form"
			>
				<RBS.Modal.Header closeButton={true}>
					<RBS.Modal.Title id="contained-modal-title-lg">
						<h4>Диапазон</h4>
					</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<p className="plch">Диапазон</p>
					<input id="inputOne" className="inp" type="text"/>
					<br/>
					<br/>
					<p className="plch">Наименование диапазона</p>
					<input id="inputTwo" className="inp" type="text"/>
					<br/>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button className="btnsave" color="primary">Сохранить</RBS.Button>
					<RBS.Button color="secondary" className="btn btn-danger" onClick={this.props.onHide}>Закрыть</RBS.Button>
				</RBS.Modal.Footer>
				<RBS.Modal.Body><h4>Цветовая метка</h4></RBS.Modal.Body>
					<p>Если значения переменных входят в СПИСОК указанный ниже, то установить цвет для ПЕРЕМЕННОЙ:</p>
					<form>
					<select className="variable">
							<option>переменная</option>
						</select>
						<select className="color">
							<option>без метки</option>
							<option className="NtN">нее норма</option>
							<option className="BN">ниже нормы</option>
							<option>норма</option>
							<option className="AtN">выше нормы</option>
							<option className="Perf">отлично</option>
						</select>
					</form>
					<hr/>
					<RBS.Modal.Body><h4>Добавлние условий, интервалов и диапазонов</h4></RBS.Modal.Body>
					<p>Вы можете добавить условие</p>
					<form>
						<select className="variable">
							<option>условие</option>
						</select>
						<button>Добавить</button>
					</form>
					<br/>
					<p>или интервал</p>
					<form>
						<select className="variable">
							<option>интервал</option>
						</select>
						<button>Добавить</button>
					</form>
					<br/>
					<p>или диапазон</p>
					<form>
						<select className="variable">
							<option>диапазон</option>
						</select>
						<button>Добавить</button>
					</form>
					<br/>
					<p>Условие, интервал или диапазон могут быть добавлены в конец списка через союзы 'И' или 'ИЛИ'</p>
					<p><input name="inp" value="И" type="radio"/>И</p>
					<p><input name="inp" value="ИЛИ" type="radio"/>ИЛИ</p>
					<br/>
					<p className="primer">ВАЖНО: при установленной метке вы можете добавить условия из сокращенного списка!</p>
					<hr/>
				<RBS.ModalHeader><h4>Помощь</h4></RBS.ModalHeader>
				<RBS.ModalBody>
					<h4>Диапазон</h4>
					<p>Объединение одного или нескольких интервалов в группу интервалов, через союзы "И/ИЛИ"</p>
					<h4>Цветовая Метка</h4>
					<p>Если логическое условие указанное в 'списке условии' окажется истиным, то выбранная в </p>
					<p>цветовой метке переменная будет отображена оператору соответствующим цветом. При </p>
					<p>установленной метке вы можете добавить условия только из сокращенного списка. Для </p>
					<p>добавления интервалов из полного списка уберите цветовую метку и сохраните форму.</p>
					<p>Содержимое поля 'Краткое имя' будет передано внешней системе.</p>
					<h4>ПРИМЕР:</h4>
					<p>ХОР_СОПР это [ ИНТЕРВАЛ_RAB_200_300 ] ИЛИ [ ИНТЕРВАЛ_RAB_1200_1300 ]</p>
					<p>что означает "[ RAB> 200 И RAB 300 ]" ИЛИ "[ RAB> 1200 И RAB 1300 ]"</p>
				</RBS.ModalBody>
				<RBS.ModalFooter/>
			</RBS.Modal>
		);
	}
}