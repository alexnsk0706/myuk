import 'bootstrap/dist/css/bootstrap.css';
import *as React from 'react';
import * as RBS from 'react-bootstrap';
type ConditionsState = {
	show: boolean;
}
const condition = {
	conditions: [
{id: 2, value: '##AC_AG < 0'},
{id: 3, value: '##AC_AG = 0'},
{id: 4, value: '##AC_AG < 1'},
{id: 5, value: '##AC_AG > 1'},
{id: 6, value: '##AC_AG = 1'},
{id: 7, value: '##AC_AG = 65'},
{id: 8, value: '##AC_AG < 65'},
{id: 9, value: '##AC_AG > 65'},
{id: 10, value: '##AC_BG < 0'},
{id: 11, value: '##AC_BG > 0'},
{id: 12, value: '##AC_BG = 0'},
{id: 13, value: '##AC_BG < 1'},
{id: 14, value: '##AC_BG > 1'},
{id: 15, value: '##AC_BG = 1'},
{id: 16, value: '##AC_BG = 65'},
{id: 17, value: '##AC_BG < 65'},
{id: 18, value: '##AC_BG > 65'},
{id: 19, value: '##AC_AB > 0'},
{id: 20, value: '##AC_AB < 0'},
{id: 21, value: '##AC_AB = 0'},
{id: 22, value: '##AC_AB > 1'},
{id: 23, value: '##AC_AB < 1'},
{id: 24, value: '##AC_AB = 1'},
{id: 25, value: '##AC_AB > 65'},
{id: 26, value: '##AC_AB < 65'},
{id: 27, value: '##AC_AB = 65'},
{id: 28, value: '##DC_AG < -65'},
{id: 29, value: '##DC_AG > -65'},
{id: 30, value: 'DC_ АG > -65В'},
{id: 31, value: '##DC_AG = -65'},
{id: 32, value: '##DC_AG > -1'},
{id: 33, value: '##DC_AG = -1'},
{id: 34, value: '##DC_AG < -1'},
{id: 35, value: '##DC_AG < 0'},
{id: 36, value: '##DC_AG = 0'},
{id: 37, value: '##DC_AG > 0'},
{id: 38, value: '##DC_AG = 1'},
{id: 39, value: '##DC_AG > 1'},
{id: 40, value: '##DC_AG < 1'},
{id: 41, value: '##DC_AG = 65'},
{id: 42, value: '##DC_AG < 65'},
{id: 43, value: '##DC_AG > 65'},
{id: 44, value: '##DC_BG > -65'},
{id: 45, value: 'DC_ BG > -65В'},
{id: 46, value: '##DC_BG < -65'},
{id: 47, value: '##DC_BG = -65'},
{id: 48, value: '##DC_BG < -1'},
{id: 49, value: '##DC_BG = -1'},
{id: 50, value: '##DC_BG > -1'},
{id: 51, value: '##DC_BG < 0'},
{id: 52, value: '##DC_BG > 0'},
{id: 53, value: '##DC_BG = 0'},
{id: 54, value: '##DC_BG < 1'},
{id: 55, value: '##DC_BG > 1'},
{id: 56, value: '##DC_BG = 1'},
{id: 57, value: '##DC_BG < 65'},
{id: 58, value: '##DC_BG > 65'},
{id: 59, value: '##DC_BG = 65'},
{id: 60, value: '##DC_AB < -65'},
{id: 61, value: '##DC_AB > -65'},
{id: 62, value: 'DC_ АВ > -65В'},
{id: 63, value: '##DC_AB = -65'},
{id: 64, value: '##DC_AB < -1'},
{id: 65, value: '##DC_AB > -1'},
{id: 66, value: '##DC_AB = -1'},
{id: 67, value: '##DC_AB < 0'},
{id: 68, value: '##DC_AB > 0'},
{id: 69, value: '##DC_AB = 0'},
{id: 70, value: '##DC_AB < 1'},
{id: 71, value: '##DC_AB > 1'},
{id: 72, value: '##DC_AB = 1'},
{id: 73, value: '##DC_AB < 65'},
{id: 74, value: '##DC_AB > 65'},
{id: 75, value: '##DC_AB = 65'},
{id: 76, value: '##C_AG < 1'},
{id: 77, value: '##C_AG > 1'},
{id: 78, value: '##C_AG = 1'},
{id: 79, value: '##C_AG < 10'},
{id: 80, value: '##C_AG > 10'},
{id: 81, value: '##C_AG = 10'},
{id: 82, value: '##C_BG < 1'},
{id: 83, value: '##C_BG > 1'},
{id: 84, value: '##C_BG = 1'},
{id: 85, value: '##C_BG < 10'},
{id: 86, value: '##C_BG > 10'},
{id: 87, value: '##C_BG = 10'},
{id: 88, value: '##C_AB < 1'},
{id: 89, value: '##C_AB > 1'},
{id: 90, value: '##C_AB = 1'},
{id: 91, value: '##C_AB < 10'},
{id: 92, value: '##C_AB > 10'},
{id: 93, value: '##C_AB = 10'},
{id: 94, value: '##C_AB < 60'},
{id: 95, value: '##C_AB > 60'},
{id: 96, value: '##C_AB = 60'},
{id: 97, value: '##C_AB < 70'},
{id: 98, value: '##C_AB > 70'},
{id: 99, value: '##C_AB = 70'},
{id: 100, value: '##C_AB < 500'},
{id: 101, value: '##C_AB > 500'},
{id: 102, value: '##C_AB = 500'},
{id: 103, value: '##C_AB < 700'},
{id: 104, value: '##C_AB > 700'},
{id: 105, value: '##C_AB = 700'},
{id: 106, value: '##C_AB < 1200'},
{id: 107, value: '##C_AB > 1200'},
{id: 108, value: '##C_AB = 1200'},
{id: 109, value: '##R_AG < 1'},
{id: 110, value: '##R_AG > 1'},
{id: 111, value: '##R_AG = 1'},
{id: 112, value: '##R_AG < 1000'},
{id: 113, value: '##R_AG > 1000'},
{id: 114, value: '##R_AG = 1000'},
{id: 115, value: '##R_AG < 150000'},
{id: 116, value: '##R_AG > 150000'},
{id: 117, value: '##R_AG = 150000'},
{id: 118, value: '##R_AG < 900000'},
{id: 119, value: '##R_AG > 900000'},
{id: 120, value: '##R_AG = 900000'},
{id: 121, value: '##R_AG < 1000000'},
{id: 122, value: '##R_AG > 1000000'},
{id: 123, value: '##R_AG = 1000000'},
{id: 124, value: '##R_AG < 5000000'},
{id: 125, value: '##R_AG > 5000000'},
{id: 126, value: 'R_AG <5000000'},
{id: 127, value: 'R_AG=5000000'},
{id: 128, value: '##R_AG = 5000000'},
{id: 129, value: 'R_AG =5000000'},
{id: 130, value: '##R_BG < 1'},
{id: 131, value: '##R_BG > 1'},
{id: 132, value: '##R_BG = 1'},
{id: 133, value: '##R_BG < 1000'},
{id: 134, value: '##R_BG > 1000'},
{id: 135, value: '##R_BG = 1000'},
{id: 136, value: '##R_BG < 150000'},
{id: 137, value: '##R_BG > 150000'},
{id: 138, value: '##R_BG = 150000'},
{id: 139, value: '##R_BG < 900000'},
{id: 140, value: '##R_BG > 900000'},
{id: 141, value: '##R_BG = 900000'},
{id: 142, value: '##R_BG < 1000000'},
{id: 143, value: '##R_BG > 1000000'},
{id: 144, value: '##R_BG = 1000000'},
{id: 145, value: '##R_BG < 5000000'},
{id: 146, value: '##R_BG > 5000000'},
{id: 147, value: 'R_BG < 5000000'},
{id: 148, value: 'R_BG=5000000'},
{id: 149, value: '##R_BG = 5000000'},
{id: 150, value: 'R_BG = 5000000'},
{id: 151, value: '##R_AB > 1'},
{id: 152, value: '##R_AB < 1'},
{id: 153, value: '##R_AB < 1'},
{id: 154, value: '##R_AB < 1'},
{id: 155, value: '##R_AB = 1'},
{id: 156, value: '##R_AB < 1000'},
{id: 157, value: '##R_AB > 1000'},
{id: 158, value: '##R_AB = 1000'},
{id: 159, value: '##R_AB < 150000'},
{id: 160, value: '##R_AB > 150000'},
{id: 161, value: '##R_AB = 150000'},
{id: 162, value: '##R_AB < 900000'},
{id: 163, value: '##R_AB > 900000'},
{id: 164, value: '##R_AB = 900000'},
{id: 165, value: '##R_AB > 1000000'},
{id: 166, value: '##R_AB < 1000000'},
{id: 167, value: '##R_AB < 1000000'},
{id: 168, value: '##R_AB < 1000000'},
{id: 169, value: '##R_AB = 1000000'},
{id: 170, value: '##R_AB < 5000000'},
{id: 171, value: '##R_AB > 5000000'},
{id: 172, value: 'R_ AB <5 МОм'},
{id: 173, value: 'R_AB=5000000'},
{id: 174, value: '##R_AB = 5000000'},
{id: 175, value: 'R_ AB =5 МОм'}
	]
}
export default class Conditions extends React.Component <{}, ConditionsState> {
	constructor(props: ConditionsState) {
		super(props);
		this.state = {
			show: false
		};
	}
	public render() {
		return (
			<RBS.Col lg={10} className="cl10">
				<RBS.Table bordered={true} hover={true} striped={true}>
					<caption>Условия</caption>
					<thead>
					<tr>
						<th>Условия</th>
						<th>Удалить</th>
					</tr>
					</thead>
					<tbody>
					{condition.conditions.map((co, i) => {
						return(
							<tr key={i}>
								<td><a>{co.value}</a></td>
								<td/>
							</tr>
						)
					})}
					</tbody>
				</RBS.Table>
			</RBS.Col>
		);
	}
}