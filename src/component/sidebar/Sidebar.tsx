import * as React from 'react';
import * as RBS from 'react-bootstrap';
import * as RRD from 'react-router-dom';
import * as List from '../../modules/IndexModules';
import './Sidebar.css';

interface SidebarSetting {
	show: boolean;
}

export default class Sidebar extends React.Component <{}, SidebarSetting> {

	constructor(props: {}) {

		super(props);

		this.state = {
			show: true
		};
	}

	handleDismiss = () => {
		this.setState({ show: false });
	}
	handleShow = () => {
		this.setState({ show: true });
	}

	public render () {
		if (this.state.show) {

		return (
			<RBS.PanelGroup accordion={true} id="accordion-example" >
				<RBS.Col lg={2} className="cl2">
				<RBS.Panel eventKey="0">
					<RBS.Panel.Heading>
							<RBS.Button className="glyphicon glyphicon-home btngg">  На главную</RBS.Button>
							<RBS.Button className="glyphicon glyphicon-align-justify btngg"  onClick={this.handleDismiss}>  Свернуть</RBS.Button>
					</RBS.Panel.Heading>
					</RBS.Panel>
					<RBS.Panel  eventKey="1">
						<RBS.Panel.Heading>
							<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-list-alt btnGGLA">   Списки
								</RBS.Button>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li className="panelB"><RRD.Link to="/Decision"><RBS.Button className="btnGGL">Решения</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Condition"><RBS.Button className="btnGGL">Состояния</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Range"><RBS.Button className="btnGGL">Диапазоны</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Interval"><RBS.Button className="btnGGL">Интервалы</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Conditions"><RBS.Button className="btnGGL">Условия</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Point"><RBS.Button className="btnGGL">Точки</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Variable"><RBS.Button className="btnGGL">Переменная</RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel eventKey="2">
						<RBS.Panel.Heading>
							<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-user btnGGLA" >   Эксперт
								</RBS.Button>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>	
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/RangeAl"><RBS.Button className="btnGGL">Диапазон -> Состояние АЛ</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/AlStatus"><RBS.Button className="btnGGL">Состояние АЛ -> Решение</RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel eventKey="3">
						<RBS.Panel.Heading>
							<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-text-width btnGGLA">   Тест
								</RBS.Button>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>	
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/LostConnections"><RBS.Button className="btnGGL">Потеряные связи</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/ApplySettings"><RBS.Button className="btnGGL">Применить настройки системы</RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/TestSettings"><RBS.Button className="btnGGL">Протестировать настройки системы</RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel eventKey="4">
						<RBS.Panel.Heading>
							<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-wrench btnGGLA">   Система
								</RBS.Button>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/SaveSystem"><RBS.Button className="btnGGL">Сохранить настройки системы в МУИК</RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					</RBS.Col>
					<RRD.Switch>
					<RRD.Route path="/Decision" component={List.Decision}/>
					<RRD.Route path="/Condition" component={List.Condition}/>
					<RRD.Route path="/Range" component={List.Range}/>
					<RRD.Route path="/Interval" component={List.Interval}/>
					<RRD.Route path="/Conditions" component={List.Conditions}/>
					<RRD.Route path="/Point" component={List.Point}/>
					<RRD.Route path="/Variable" component={List.Variable}/> */}
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/RangeAl" component={List.RangeAl}/>
					<RRD.Route path="/AlStatus" component={List.AlStatus}/>
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/LostConnections" component={List.LostConnections}/>
					<RRD.Route path="/ApplySettings" component={List.ApplySettings}/>
					<RRD.Route path="/TestSettings" component={List.TestSettings}/>
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/SaveSystem" component={List.SaveSystem}/>
				</RRD.Switch>
			</RBS.PanelGroup>
				);
				}

		return ( 
			<RBS.PanelGroup accordion={true} id="accordion-example">
				<RBS.Col className="xs2" lg={2}>
				<RBS.Panel  eventKey="9">
						<RBS.Panel.Heading>
							<RBS.Button className="glyphicon glyphicon-home btngg" title="На главную"/>
							<RBS.Button className="glyphicon glyphicon-align-justify btngg"  onClick={this.handleShow} title="Развернуть"/>
						</RBS.Panel.Heading>
					</RBS.Panel>
					<RBS.Panel  className="panel"  eventKey="5">
						<RBS.Panel.Heading>
						<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-list-alt btnGGLA" title="Списки"/>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>
					<RBS.Panel.Body collapsible={true}>
							<ul className="trnasport">
								<li className="panelB"><RRD.Link to="/Decision"><RBS.Button className="btnGGL"><p className="p1">Решения</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Condition"><RBS.Button className="btnGGL"><p className="p1">Состояния</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Range"><RBS.Button className="btnGGL"><p className="p1">Диапазоны</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Interval"><RBS.Button className="btnGGL"><p className="p1">Интервалы</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Conditions"><RBS.Button className="btnGGL"><p className="p1">Условия</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Point"><RBS.Button className="btnGGL"><p className="p1">Точки</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/Variable"><RBS.Button className="btnGGL"><p className="p1">Переменная</p></RBS.Button></RRD.Link></li>
							</ul>
					</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel className="panel" eventKey="6">
						<RBS.Panel.Heading>
						<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-user btnGGLA" title="Эксперт"/>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/RangeAl">
									<RBS.Button className="btnGGL"><p className="p1">Диапазон -> Состояние АЛ</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/AlStatus">
									<RBS.Button className="btnGGL"><p className="p1">Состояние АЛ -> Решение</p></RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel  className="panel" eventKey="7">
					<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-text-width btnGGLA" title="Тест"/>
							</RBS.Panel.Title>
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/LostConnections"><RBS.Button className="btnGGL"><p className="p1">Потеряные связи</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/ApplySettings"><RBS.Button className="btnGGL">
									<p className="p1">Применить настройки<br/> системы</p></RBS.Button></RRD.Link></li>
								<li><RRD.Link to="/TestSettings"><RBS.Button className="btnGGL">
									<p className="p1">Протестировать настройки<br/> системы</p></RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
					<RBS.Panel  className="panel" eventKey="8">
						<RBS.Panel.Heading>
						<RBS.Panel.Title toggle={true}>
								<RBS.Button className="glyphicon glyphicon-wrench btnGGLA" title="Система"/>
							</RBS.Panel.Title>
						</RBS.Panel.Heading>
						<RBS.Panel.Body collapsible={true}>
							<ul>
								<li><RRD.Link to="/SaveSystem"><RBS.Button className="btnGGL">
									<p className="p1">Сохранить настройки<br/> системы в МУИК</p></RBS.Button></RRD.Link></li>
							</ul>
						</RBS.Panel.Body>
					</RBS.Panel>
				</RBS.Col>
				<RRD.Switch>
					<RRD.Route path="/Decision" component={List.Decision}/>
					<RRD.Route path="/Condition" component={List.Condition}/>
					<RRD.Route path="/Range" component={List.Range}/>
					<RRD.Route path="/Interval" component={List.Interval}/>
					<RRD.Route path="/Conditions" component={List.Conditions}/>
					<RRD.Route path="/Point" component={List.Point}/>
					<RRD.Route path="/Variable" component={List.Variable}/> */}
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/RangeAl" component={List.RangeAl}/>
					<RRD.Route path="/AlStatus" component={List.AlStatus}/>
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/LostConnections" component={List.LostConnections}/>
					<RRD.Route path="/ApplySettings" component={List.ApplySettings}/>
					<RRD.Route path="/TestSettings" component={List.TestSettings}/>
				</RRD.Switch>
				<RRD.Switch>
					<RRD.Route path="/SaveSystem" component={List.SaveSystem}/>
				</RRD.Switch>
			</RBS.PanelGroup>
		);
	}
}