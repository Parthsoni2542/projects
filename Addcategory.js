import React,{ Component } from 'react';
import axios from 'axios';
import {Card,Form,Button,Table,Alert} from "tabler-react";
import Categoryview from './Categoryview';
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup} from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// import Editcat from './Editcat';

// import {FormFeedback } from 'reactstrap';



class Addcategory extends Component{
	constructor(props){
	super(props);
	 this.onChangeCategoryname = this.onChangeCategoryname.bind(this);
	 this.onSubmit = this.onSubmit.bind(this);
	 // this.onChangeButton= this.onChangeButton.bind(this);

	   this.state = {
	  	category_name: '',
	  	categorys:[],
	  	category_error:'',
	  	categorymsg:'',
	  	// ProductData: [] 
	  		
	  };
}



onChangeCategoryname(e){
		this.setState({
			category_name:e.target.value,
		});
}


componentDidMount(){
  	this.categoryData();
  }


categoryData(){
  	// console.log("fetching category")
  	axios.get('http://localhost/React/categoryview.php')
  	.then(response => {
  		this.setState({ categorys:response.data });
  	})
  	.catch(function (error){
  			// console.log(error);
  	});
}

onSubmit(e){
		e.preventDefault();
		const object = {
			category_name: this.state.category_name
		};

		if (this.state.category_name === "") {
			this.setState({
				category_error:"category is empty",
		 
			});
		} else {
			axios.post('http://localhost/React/categoryinsert.php', object)
			.then(res => {
				console.log(res.data);
				this.categoryData();
			});
			
			this.setState({
			  	category_name:'',
			  	category_error:'',
			  	categorymsg:'CategoryInserted Data'

			});
		}
}
userlist(){
  	return this.state.categorys.map(function(object,i){
  		return <Categoryview obj={object}key={i} />
  		// return <Editcat object={object} key={i}/>
  	})
}
	
render(){

	return(
		<div className="p-5">	
          <Card.Title>Add Category</Card.Title>
          <div className="row">
				<div className="col-5">
    		<br>
    		</br>	

		<Form onSubmit={this.onSubmit}>
		<Form.Input placeholder='Enter Categoryname' name="catname"
		value={this.state.category_name}
		onChange={this.onChangeCategoryname}/>
		<div style={{color: 'red'}}>{this.state.category_error}</div>
		<br>
		</br>
		<Button color="primary" value="AddCategory">AddCategory</Button>
		<div style={{color: 'red'}}></div>
		<br></br>
		<Alert type="success">
		{this.state.categorymsg}
		</Alert>
		</Form>
    	</div>
</div>
<br>
</br>
<Table>
<thead>
  <tr>
    <th>Cat_ID</th>
    <th>CategoryName</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
    {this.userlist()}

  </tbody>
</Table>
</div>	

		
			)
	}
}
export default Addcategory;