import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as RBS from 'react-bootstrap';

type AddModalsIntervalProps = {
	show: boolean
	onHide: () => void
}

export default class AddModalsInterval extends React.Component <AddModalsIntervalProps> {

	constructor(props: AddModalsIntervalProps) {

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
						<h4>Интервал</h4>
					</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<p className="plch">Наименование интервала</p>
					<input className="inp" type="text"/>
					<br/>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button className="btnsave" color="primary">Сохранить</RBS.Button>
					<RBS.Button color="secondary" className="btn btn-danger" onClick={this.props.onHide}>Закрыть</RBS.Button>
				</RBS.Modal.Footer>
				<RBS.Modal.Body><h4>Добавлние условий и интервалов</h4></RBS.Modal.Body>
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
					<p>Условие или интервал могут быть добавлены в конец списка через союзы 'И' или 'ИЛИ'</p>
					<p><input name="inp" value="U" type="radio"/>"И"</p>
					<p><input name="inp" value="ULU" type="radio"/>"ИЛИ"</p>
					<br/>
					<hr/>
					<RBS.ModalHeader><h4>Помощь</h4></RBS.ModalHeader>
					<RBS.ModalBody>
						<h4>Интервал</h4>
						<p>Объединение нескольких Условий в Группу Условий, через союзы "И/ИЛИ".</p>
						<h4>Пример:</h4>
						<p>СОПР_АБ_НОРМ_1 это [ (RAB> 200) И (RAB 300) ]</p>
					</RBS.ModalBody>
					<RBS.ModalFooter/>
			</RBS.Modal>
		);
	}
}