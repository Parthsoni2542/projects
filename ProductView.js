import React,{ Component } from 'react';
// import img from '../../src/logo_1581070660.jpg';
// import logo from '../logo_1581070660.jpg';
import { CustomInput,FormGroup } from 'reactstrap';

class ProductView extends Component{
	render(){
		return(
			<tr>
				<td>
				{this.props.obj.p_id}
				</td>
				<td>
				{this.props.obj.category_name}
				</td>
				<td>
				{this.props.obj.subcategory_name}
				</td>
				<td>
				{this.props.obj.product_name}
				</td>
				<td>
				<img src={this.props.obj.image} alt="" width="100px" height="100px" />
				</td>
				<td>
				{this.props.obj.descrption}
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
export default ProductView;