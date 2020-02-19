import React,{ Component } from 'react';
// import img from '../logo_1581070660.jpg';
import { CustomInput,FormGroup } from 'reactstrap';


class Stockview extends Component{
	render(){
		return(
			<tr><td>
				{this.props.obj.stock_id}
				</td>
				<td>
				{this.props.obj.vender_name}
				</td>
				<td>
				{this.props.obj.product_name}
				</td>
				<td>
				{this.props.obj.date}
				</td>
				<td>
				{this.props.obj.bill_no}
				</td>
				<td>
				{this.props.obj.quantity}
				</td>
				<td>
				<img src={this.props.obj.bill_image} alt="" width="100px" height="100px" />
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
export default Stockview;