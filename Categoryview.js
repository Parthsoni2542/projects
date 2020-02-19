import React,{ Component } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup} from 'reactstrap';

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 

// import Editcat from './Editcat';

class Categoryview extends Component{
	constructor(props){
		super(props);
		this.delete = this.delete.bind(this);
		this.onChangetoogle = this.onChangetoogle.bind(this);
		this.state = {
			redirect:false,
			toogleonoff:'',
			categorys:''
		}
		// console.log(this.state)
	}

	onChangetoogle(e){
		this.setState({
			toogleonoff:"off"
		});
		console.log(e.target.value);
}

	delete(){
		axios.get('http://localhost/React/deletecat.php?id='+this.props.obj.cat_id)
		.then(
			this.setState({ redirect: true })
			)
		.catch(err =>console.log(err))
	}


	componentDidMount(){
  	// console.log("fetching category")
  	axios.get('http://localhost/React/categoryview.php')
  	.then(response => {
  		this.setState({ categorys:response.data });
  	})
  	.catch(function (error){
  			// console.log(error);
  	});
}

	render(){
		// const { redirect } = this.state;
		// if ( redirect ) {
		// 	return <Redirect to='/Addcategory'/>;
		// }

		return(
				<tr>
				<td>
				{this.props.obj.cat_id}
				</td>
				<td>
				{this.props.obj.category_name}
				</td>
				<td>
				<FormGroup>
        		<div>
          		<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" value={this.state.toogleonoff} onChange={this.onChangetoogle} checked/>
          		</div>
      			</FormGroup>
				</td>
				<td>
				<Link to={"Editcat/"+this.props.obj.cat_id} className="btn btn-primary">Edit</Link>
				</td>
				<td>
				<button onClick={this.delete} className="btn btn-primary">Delete</button>
				</td>
				</tr>
				
						
				)

	}
}
export default Categoryview;