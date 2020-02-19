import React,{ Component } from 'react';
import axios from 'axios';
import ProductView from './ProductView';
import {Table } from "tabler-react";

class Addproduct extends Component{
	constructor(props) {
	  super(props);

	    this.onChangeOptionmenu = this.onChangeOptionmenu.bind(this);
	    this.onChangeOptionmenu2 = this.onChangeOptionmenu2.bind(this);
	    this.onChangeproductname = this.onChangeproductname.bind(this);
	    this.onChangefilename = this.onChangefilename.bind(this);
	    this.onChangeDescrption = this.onChangeDescrption.bind(this);
	    this.onSubmit =this.onSubmit.bind(this);

	   this.state = {
	  	 cat_names:[],
	  	 cat_id:'1',
	  	 subcats:[],
	  	 sub_id:'1',
	  	 product_name:'',
	  	 descrption:'',
	  	 selectedFile:null,
	  	 productsall:[],
	  

	  };
} 
	onChangeOptionmenu(e){
		this.setState({
			cat_id:e.target.value

		});

		axios.get('http://localhost/React/subcat_id.php?cat_id='+e.target.value)
			.then(response => {
				this.setState({subcats: response.data });
			})
		console.log(e.target.value)
	}
	onChangeOptionmenu2(e){
		this.setState({
			sub_id:e.target.value
		});
		console.log(e.target.value)
		
	}
	onChangeproductname(e){
		this.setState({
			product_name:e.target.value
		});
		console.log(e.target.value)
	}
	onChangefilename(e){
		this.setState({
			selectedFile:e.target.files[0]
		});
			console.log(e.target.files[0])
	}

	onChangeDescrption(e){
		this.setState({
			descrption:e.target.value
		});
	}


	onSubmit(e){
		e.preventDefault();

	 // console.log(this.state);
		/*console.log(
			"catid is: ",this.state.cat_id,
			"\nsubCatID is: ", this.state.sub_id,
			"\nproduct_name is: ",this.state.product_name,
			"\nselectedFile is:",this.state.selectedFile,
			"\ndescrption is:",this.state.descrption
		);
*/

		/*const Insertdata = {	
		cat_id: this.state.cat_id,
		sub_id: this.state.sub_id,
		product_name: this.state.product_name,
		descrption: this.state.descrption,
		selectedFile:this.state.selectedFile,
		selectedFileName:this.state.selectedFile.name
		};	
		console.log(Insertdata);
*/

  		const file = new FormData();
  		file.append('cat_id',this.state.cat_id);
  		file.append('sub_id',this.state.sub_id);
  		file.append('product_name',this.state.product_name);
  		file.append('descrption',this.state.descrption);
   		file.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);

			axios.post('http://localhost/React/productinsert.php',file)	
		.then(res => {
			console.log(file);
			this.categoryAndSubcateGoryFeatch();
		});
		// .catch(error => console.log(error));


	  	this.setState({
	  	cat_id:'',
	  	sub_id:'',
	  	product_name:'',
	  	selectedFile:'',
	  	descrption:'',
	  	cat_names:[],
	  	subcats:[]
	  	
	  });

}

componentDidMount(){
	this.categoryAndSubcateGoryFeatch();
}
categoryAndSubcateGoryFeatch(){
			axios.get('http://localhost/React/cat_id.php')
			.then(response => {
				this.setState({cat_names: response.data });
			})
			.catch(function (error){
				// console.log(error);
			})
			

			axios.get('http://localhost/React/productview.php')
  			.then(response => {
  			this.setState({ productsall:response.data });
  				})
  			.catch(function (error){
  			// console.log(error);
  	});
}
   userlist(){
  	return this.state.productsall.map(function(object,i){
  		return <ProductView obj={object}key={i} />
  	})

		}

		

	
	
	
	render(){

		return(
			<div className="p-5">
			<form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col-6">
			<div className="form-group">
  			<label>Select CategoryName:</label>
  			<select className="form-control " onChange={this.onChangeOptionmenu}>
  			 <option>Choose...</option>
  			{

  			 this.state.cat_names.map(cat_names =>{
  			 	return (<option key={cat_names.cat_id} value={cat_names.cat_id}>{cat_names.category_name}
  			</option>);
  			 })
  			}
  			</select>
			</div>
			</div>
			<div className="col-6">
			<div className="form-group">
  			<label>Select SubcategoryName:</label>
  			<select className="form-control" onChange={this.onChangeOptionmenu2}>
  			 <option>Choose...</option>
  			{

  			 this.state.subcats.map(subcats =>{
  			 	return (<option key={subcats.sub_id} value={subcats.sub_id}>{subcats.subcategory_name}
  			</option>);
  			 })
  			}
  			</select>
			</div>
			</div>

			<div className="col-6">
			<div className="form-group">
				<input type="text" className="form-control"
				value={this.state.product_name} onChange={this.onChangeproductname}
				 placeholder="ProductName"/>
				 </div>
			</div>
			<div className="col-6">
			<div  className="form-group">
			<div  className="form-group">
				<input type="text" className="form-control "
			 value={this.state.descrption } onChange={this.onChangeDescrption}
				 placeholder="Descrption"/>
				 </div>
				 
				 </div>
			</div>
			<div className="col-6">
			<label>ImageUpload:</label>
				<input type="file" className="form-control"
				 placeholder="SubcategoryName"
				onChange={this.onChangefilename}
				/>
			</div>
			<div>
			<label></label>
			</div>
			<div className="col-12 text-center p-3">
			<div className="form-group">
				<input type="submit" className="btn btn-primary"
						value="Add Product"  />
				</div>
			</div>
			</div>
 
		
			</form>
<br>
</br>
<Table>
<thead>
  <tr>
    <th>P_Id</th>
    <th>Category_Name</th>
    <th>Subcategory_Name</th>
    <th>Product_Name</th>
    <th>Image</th>
    <th>Descrption</th>
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
export default Addproduct;