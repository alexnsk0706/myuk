import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type AddModalsConditionProps = {
	show: boolean
	onHide: () => void
}

export default class AddModalsCondition extends React.Component <AddModalsConditionProps> {

	constructor(props: AddModalsConditionProps) {

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
						<h4>Решение</h4>
					</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<p className="plch">Наименование состояния объекта</p>
					<input id="inputOne" className="inp" type="text"/>
					<br/>
					<br/>
					<p className="plch">Краткое имя состояния</p>
					<input id="inputTwo" className="inp" type="text"/>
					<br/>
					<br/>
					<p className="primer plch">ВАЖНО: редактирование данного поля может изменить поведение других систем !!!</p>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button className="btnsave" color="primary">Сохранить</RBS.Button>
					<RBS.Button color="secondary" className="btn btn-danger" onClick={this.props.onHide}>Закрыть</RBS.Button>
				</RBS.Modal.Footer>
				<RBS.ModalHeader><h4>Помощь</h4></RBS.ModalHeader>
				<RBS.ModalBody>
					<h4>Состояние</h4>
					<p>качественная характеристика, которая показывает наличие тои или иной неисправностей</p>
					<p>(проблемы обнаруженной на абонентской линии)</p>
					<p>Содержимое поля 'Наименования состояния' будет отображено оператору.</p>
					<h4>КРАТКОЕ ИМЯ</h4>
					<p>Условное название данного состояние используемое для связи с внешними системами.</p>
					<p className="primer">При заполнении используйте цифры и латинские буквы !</p>
					<p>Содержимое поля 'Краткое имя' будет передано внешней системе.</p>
					<h4>ПРИМЕР:</h4>
					<p>ЛИНИЯ_НОРМА, ЛИНИЯ_БРАК, ЛИНИЯ_ДЛЯ_xDSL</p>
				</RBS.ModalBody>
				<RBS.ModalFooter/>
			</RBS.Modal>
		);
	}
}