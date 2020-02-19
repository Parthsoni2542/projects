import React,{ Component } from 'react';
import { CustomInput,FormGroup } from 'reactstrap';

class RecordList extends Component{
	render(){
		return(
			<tr>
				<td>
				{this.props.obj.v_id}
				</td>
				<td>
				{this.props.obj.vender_name}
				</td>
				<td>
				{this.props.obj.vender_email}
				</td>
				<td>
				{this.props.obj.vender_address}
				</td>
				<td>
				{this.props.obj.vender_state}
				</td>
				<td>
				{this.props.obj.vender_city}
				</td>
				<td>
				{this.props.obj.vender_mo}
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
export default RecordList;