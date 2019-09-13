import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type AddModalsPointProps = {
	show: boolean
	onHide: () => void
}

export default class AddModalsPoint extends React.Component <AddModalsPointProps> {

	constructor(props: AddModalsPointProps) {

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
								<h4>Точка</h4>
							</RBS.Modal.Title>
						</RBS.Modal.Header>
						<RBS.Modal.Body>
							<input className="inp" type="text" placeholder="Наименование"/>
							<br/>
							<br/>
							<form>
								<select className="variablel">
									<option>Переменная</option>
								</select>
							</form>
							<br/>
							<input className="inp" type="text" placeholder="Значение"/>
							<br/>
						</RBS.Modal.Body>
						<RBS.Modal.Footer>
							<RBS.Button className="btnsave" color="primary">Сохранить</RBS.Button>
							<RBS.Button color="secondary" className="btn btn-danger" onClick={this.props.onHide}>Закрыть</RBS.Button>
						</RBS.Modal.Footer>
						<RBS.ModalHeader><h4>Помощь</h4></RBS.ModalHeader>
						<RBS.ModalBody>
							<h4>Точка</h4>
							<p>Значение переменной в которой она изменяет свое состояние.</p>
							<p>Если вы хотите изменить значение точки, то нажмите 'Изменить значения'. При этом условия </p>
							<p>будут пересозданы.</p>
							<p>Удалить условия связанные с данной точкой возможно только если условия не используются в </p>
							<p>лиапазонах и интервалах.</p>
							<h4>Значение</h4>
							<p>Введите текущее значение для точки. Если значение является строкой, то введите ее соблюдая </p>
							<p>регистр с использованием латинских букв.</p>
							<h4>Пример:</h4>
							<p>10, 20, 30.0, MT20, ERROR</p>
							<h4>Наименование</h4>
							<p>Условное имя данной точки которое будет использоваться при создании Условий</p>
							<h4>Пример:</h4>
							<p>"Точка кипения","1 нФ"</p>
						</RBS.ModalBody>
						<RBS.ModalFooter/>
			</RBS.Modal>
		);
	}
}