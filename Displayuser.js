import React,{ Component } from 'react';
import { CustomInput,FormGroup } from 'reactstrap';


class Displayuser extends Component{
	render(){
		return(
		
				<tr>
				<td>
				{this.props.obj.user_id}
				</td>
				<td>
				{this.props.obj.first_name}
				</td>
				<td>
				{this.props.obj.middle_name}
				</td>
				<td>
				{this.props.obj.last_name}
				</td>
				<td>
				{this.props.obj.email}
				</td>
				<td>
				{this.props.obj.mobile_no}
				</td>
				<td>
				{this.props.obj.mobile_no2}
				</td>
				<td>
				<FormGroup>
				<div>
          		<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
        		</div>
     			</FormGroup>
     			</td>
				
				<input type="submit" className="btn btn-primary"
						value="Edit" />
					
				</tr>	
			
		


				)

	}
}
export default Displayuser;