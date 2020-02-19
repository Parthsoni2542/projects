import React,{ Component } from 'react';
// import {Table } from "tabler-react";
import { CustomInput,FormGroup } from 'reactstrap';

class Subview extends Component{
	render(){
		return(
			<tr>
				<td>
				{this.props.obj.sub_id}
				</td>
				<td>
				{this.props.obj.category_name}
				</td>
				<td>
				{this.props.obj.subcategory_name}
				</td>
				<td>
				<FormGroup>
        		<div>
          		<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"  />
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
export default Subview;