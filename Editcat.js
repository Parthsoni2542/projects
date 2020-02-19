import React,{ Component } from 'react';
import {Card,Form,Button} from "tabler-react";
import axios from 'axios';


class Editcat extends Component{
	constructor(props){
	super(props);
	this.onChangeCategoryname = this.onChangeCategoryname.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

	   this.state = {
	  	category_name:'',
	  	categorys:[]
	  		
	  }
}



onChangeCategoryname(e){
		this.setState({
			category_name:e.target.value,
		});
	}


getcatecoryid(){
		axios.get('http://localhost/React/getcatecoryid.php?id='+this.props.match.params.id)
	.then(response => {
		this.setState({
			category_name:response.data.category_name})
		})
		.catch(function (error){
			console.log(error);
		})
	}

		componentDidMount(){
			this.getcatecoryid();
	
}		
onSubmit(e){
		e.preventDefault();

		const object = {
			// id:this.state.id,
			// id:this.state.category_name,
			category_name: this.state.category_name
		};
		axios.post('http://localhost/React/updatecat.php?id='+
		this.props.match.params.id, object)
		.then(res => console.log(res.data));
	}



		render(){
		return(
	<div className="p-5">	
          <Card.Title>Update Category</Card.Title>

	<div className="row">
		<div className="col-5">
    		<br>
    		</br>
		<Form onSubmit={this.onSubmit}>
		<Form.Input placeholder='Enter Categoryname' name="catname"
		value={this.state.category_name}
		onChange={this.onChangeCategoryname}/>
			<br>
			</br>
		<Button color="primary" value="AddCategodry">Update</Button>
		</Form>
    	</div>
	</div>
</div>	

		
			)
	}
}


export default Editcat;