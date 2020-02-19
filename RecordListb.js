import React,{ Component } from 'react';
import { CustomInput,FormGroup } from 'reactstrap';
class RecordListb extends Component{
	render(){
		return(
			<tr>
				<td>
				{this.props.obj.b_id}
				</td>
				<td>
				{this.props.obj.bulding_name}
				</td>
				<td>
				{this.props.obj.bulding_address}
				</td>
				<td>
				{this.props.obj.bulding_area}
				</td>
				<td>
				{this.props.obj.bulding_state}
				</td>
				<td>
				{this.props.obj.bulding_city}
				</td>
				<td>
				<FormGroup>
        		<div>
          		<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" />
          		</div>
      			</FormGroup>
				</td>
				
				<td>
				<input type="submit" className="btn btn-primary"
						value="Edit" />
				</td>	
				</tr>			


				)

	}
}
export default RecordListb;