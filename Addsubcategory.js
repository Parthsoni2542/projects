import React,{ Component } from 'react';
import axios from 'axios';

import {Table } from "tabler-react";
  // import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import Subview from './Subview';
class Addsubcategory extends Component{
	constructor(props) {
	  super(props);
	  this.onChangesubategoryname = this.onChangesubategoryname.bind(this); 
	  this.onChangeOptionmenu = this.onChangeOptionmenu.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
	
	  this.state = {
	  	 cat_names:[],
	  	 subcategory_name:'',
	  	 cat_id:'1',
	  	 subcategorys:[],
	  	 option_error:'',
	  	 subcategory_error:''



	  };
	} 
	onChangesubategoryname(e){
		this.setState({
			subcategory_name:e.target.value,
			// cat_id:e.target.value
		});

	}
	onChangeOptionmenu(e){
		this.setState({
			cat_id:e.target.value

		})
		console.log(e.target.value)
	}

	onSubmit(e){
		e.preventDefault();

		const send = {
			subcategory_name:this.state.subcategory_name,	
			cat_id :this.state.cat_id	
		};

		if (this.state.subcategory_error === "") {
			this.setState({
				subcategory_error:"subcategory is empty",
		 
			});

		}
		if (this.state.option_error === "") {
			this.setState({
				option_error:"option select pls",
		 
			});
		}

		 else {
			axios.post('http://localhost/React/subcatinsert.php', send)
		.then(res => {
			console.log(res.data);
			this.subcategoryDataFeatch();
		});
			
		this.setState({
	  	subcategory_name:'',
	  	cat_id:'',
	  	cat_names:[],
	  	subcategory_error:'',
	  	option_error:''
	  	  });
		}
		// console.log(send);

		

	  
	}
componentDidMount(){
	this.subcategoryDataFeatch();
	this.categoryFeatchdata();
}
	  categoryFeatchdata(){
			axios.get('http://localhost/React/subcategory.php')
			.then(response => {
				this.setState({cat_names: response.data });
			})
			.catch(function (error){
				console.log(error);
		});


			
} 
subcategoryDataFeatch(){

	axios.get('http://localhost/React/subcategoryview.php')
  			.then(response => {
  				this.setState({subcategorys: response.data });
  				})
  			.catch(function (error){
  			// console.log(error);
  	});

} 		  		
  		userlist(){
  		return this.state.subcategorys.map(function(object,i){
  				return <Subview obj={object}key={i} />
  	})

		}
	

	
	render(){

		return(
			<div className="p-5">
			<form onSubmit={this.onSubmit}>
			 <div className="form-group">
  			<label>Select Category</label>
  			<select className="form-control col-5" onChange={this.onChangeOptionmenu}>
  			<option>Choose...</option>
  			  {

  			 this.state.cat_names.map(cat_names =>{
  			 	return (<option key={cat_names.cat_id} value={cat_names.cat_id}>{cat_names.category_name}
  			</option>);
  			 })
  			}
  			</select>
  			<div style={{color: 'red'}}>{this.state.option_error}</div>
			</div>
			
			<div className="form-group">
				<input type="text" className="form-control col-5"
				 value={this.state.subcategory_name} onChange={this.onChangesubategoryname}
				 placeholder="SubcategoryName" /> 
				 <div style={{color: 'red'}}>{this.state.subcategory_error}</div>
			</div>
			
			<div className="form-group">
				<input type="submit" className="btn btn-primary"
						value="Add Subcategory" />
				</div>
			</form>

			<br>
</br>
<Table>
<thead>
  <tr>
    <th>Sub_ID</th>
    <th>CategoryName</th>
    <th>SubcategoryName</th>
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
export default Addsubcategory;