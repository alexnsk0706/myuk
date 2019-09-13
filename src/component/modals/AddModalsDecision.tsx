import * as React from 'react';
import * as RBS from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type AddModalsDecisionProps = {
	show: boolean
	onHide: () => void
}

export default class AddModalsDecision extends React.Component <AddModalsDecisionProps> {

	constructor(props: AddModalsDecisionProps) {

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
					<p className="plch">Наименование решения</p>
					<input id="inputOne" className="inp" type="text"/>
					<br/>
					<br/>
					<p className="plch">Краткое имя решения</p>
					<input id="inputTwo" className="inp" type="text"/>
					<br/>
					<br/>
					<p className="primer plch">ВАЖНО: редактирование данного поля может изменить поведение других систем !!!</p>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button className="btnsave" color="primary"/*onClick={}*/>Сохранить</RBS.Button>
					<RBS.Button color="secondary" className="btn btn-danger" onClick={this.props.onHide}>Закрыть</RBS.Button>
				</RBS.Modal.Footer>
				<RBS.ModalHeader><h4>Помощь</h4></RBS.ModalHeader>
				<RBS.ModalBody>
					<h4>РЕШЕНИЕ</h4>
					<p>Список возможных действии которые будут показаны Оператору внизу формы измеренных параметров.</p>
					<p>Действие может быть побудительное, т.е. выполнить именно, что там написано.</p>
					<p>Для одной формы может быть сформулировано несколько советов, все они будут отсортирорваны</p>
					<p>в соответствии с Приоритетом..</p>
					<p>Содержимое поля 'Наименования решения' будет отображено оператору.</p>
					<h4>КРАТКОЕ ИМЯ</h4>
					<p>Условное название данного состояние используемое для связи с внешними системами.</p>
					<p className="primer">При заполнении используйте цифры и латинские буквы !</p>
					<p>Содержимое поля 'Краткое имя' будет передано внешней системе.</p>
					<h4>ПРИМЕР:</h4>
					<p>ОТПРАВИТЬ_НА_АТС, УТОЧНИТЬ_ТИП_ТЕЛ_АППАРАТА</p>
				</RBS.ModalBody>
				<RBS.ModalFooter/>
			</RBS.Modal>
		);
	}
}