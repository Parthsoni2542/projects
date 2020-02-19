import React,{ Component } from 'react';
import axios from 'axios';
import {Table } from "tabler-react";
import Stockview from './Stockview';


class AddStock extends Component{
	constructor(props) {
	  super(props);

	    this.onChangeOptionmenu1 = this.onChangeOptionmenu1.bind(this);
	    this.onChangeOptionmenu2 = this.onChangeOptionmenu2.bind(this);
	    this.onChangeDate = this.onChangeDate.bind(this);
	    this.onChangeBillno = this.onChangeBillno.bind(this);
	    this.onChangeQuantity = this.onChangeQuantity.bind(this);
	    this.onChangeFile = this.onChangeFile.bind(this);
	    this.onSubmit =this.onSubmit.bind(this);




	   this.state = {
	  	 venders:[],
	  	 v_id:'1',
	  	 products:[],
	  	 p_id:'1',
	  	 date:'',
	  	 bill_no:'',
	  	 quantity:'',
	  	 stockadd:[],
	  	 selectedFile:null
	  };
	} 

	    onChangeOptionmenu1(e){
	    	this.setState({
	    		v_id:e.target.value
	    	});
	    	console.log(e.target.value)
	    }
	   	onChangeOptionmenu2(e){
	    	this.setState({
	    		p_id:e.target.value
	    	});
	    	console.log(e.target.value)
	    }
	    onChangeDate(e){
	    	this.setState({
	    		date:e.target.value
	    	});
	    	console.log(e.target.value)

	    }
	    onChangeBillno(e){
	    	this.setState({
	    		bill_no:e.target.value
	    	})
	    	console.log(e.target.value)
	    }
	    onChangeQuantity(e){
	    	this.setState({
	    		quantity:e.target.value
	    	})
	    	console.log(e.target.value)

	    }
	    onChangeFile(e){
	    	this.setState({
	    		selectedFile:e.target.files[0]
	    	})
	    	console.log(e.target.files[0])
	    }
	  	onSubmit(e){
		e.preventDefault();


		 console.log(this.state);
		console.log(
			"catid is: ",this.state.v_id,
			"\nsubCatID is: ", this.state.p_id,
			"\nproduct_name is: ",this.state.date,
			"\nselectedFile is:",this.state.bill_no,
			"\ndescrption is:",this.state.quantity,
			"\nselect file is:",this.state.selectedFile
		);
		// const sendata ={
		// 	// subcategory_name:this.state.subcategory_name,	
		// 	v_id: this.state.v_id,
		// 	p_id: this.state.p_id,
		// 	date: this.state.date,
		// 	bill_no: this.state.bill_no,
		// 	quantity: this.state.quantity,
		// 	selectedfile: this.state.selectedfile

		// };

		const file = new FormData();
  		file.append('v_id',this.state.v_id);
  		file.append('p_id',this.state.p_id);
  		file.append('date',this.state.date);
  		file.append('bill_no',this.state.bill_no);
  		file.append('quantity',this.state.quantity);
   		file.append('selectedFile',this.state.selectedFile, this.state.selectedFile.name);

			axios.post('http://localhost/React/stockadd.php',file)	
		.then(res => {
			console.log(file);
			this.stockView();
		});
		// .catch(error => console.log(error));

	  	this.setState({
	  	v_id:'',
	  	p_id:'',
	  	date:'',
	  	bill_no:'',
	  	quantity:'',
	  	selectedFile:'',
	  	venders:[],
	  	products:[]

	  	
	  });

	}
	componentDidMount(){
			this.stockView();
  	}

	stockView(){
		axios.get('http://localhost/React/venderlist.php')
			.then(response => {
				this.setState({venders: response.data });
			})
			.catch(function (error){
				console.log(error);
			})
			axios.get('http://localhost/React/productlist.php')
			.then(response => {
				this.setState({products: response.data });
			})
			.catch(function (error){
				console.log(error);
			})
			axios.get('http://localhost/React/stockview.php')
  			.then(response => {
  			this.setState({stockadd:response.data });
  				})
  			.catch(function (error){
  			console.log(error);
  	});	

	}
	 
	  	// 					

  		 userlist(){
  	return this.state.stockadd.map(function(object,i){
  		return <Stockview obj={object}key={i} />
  	})


		}


	render(){
		return(<div className="p-5">
			<form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col-6">
				<div className="form-group">
  			<select className="form-control" onChange={this.onChangeOptionmenu1}>
  		 	<option>Select VenderName</option>
  			{
  			 this.state.venders.map(venders =>{
  			 	return (<option key={venders.v_id} value={venders.v_id}>{venders.vender_name}
  			</option>);
  			 })
  			}
  			</select>
			</div>
			</div>
			<div className="col-6">
			<div className="form-group">
  			<select className="form-control" onChange={this.onChangeOptionmenu2}>
  			 <option>Select ProductName</option>
  			{
  			 this.state.products.map(products =>{
  			 	return (<option key={products.p_id} value={products.p_id}>{products.product_name}
  			</option>);
  			 })
  			}
  			</select>
			</div>
			</div>
			<div className="col-6">
			<div className="form-group">
  
  			<input type="date" className="form-control"
  			value={this.state.date} onChange={this.onChangeDate}/>
			</div>
			</div>
			<div className="col-6">
			<div className="form-group">
				<input type="text" className="form-control"
				 placeholder="Bill_No"
				 value={this.state.bill_no} onChange={this.onChangeBillno}/>
		    </div>
			</div>
			<div className="col-6">
			<div className="form-group">
				<input type="text" className="form-control"
				 value={this.state.quantity} onChange={this.onChangeQuantity}
				 placeholder="Quantity"/>
		    </div>
			</div>
			<div className="col-6">
			 <div className="form-group">
				<input type="file" className="form-control"
				onChange={this.onChangeFile}/>
			</div>
			</div>
			
			</div>
				<div className="form-group text-center">
				<input type="submit" className="btn btn-primary"
						value="Add Stock" />
				</div>
				</form>

				<div className="p-2	">
				<Table>
  			<thead>
   			 <tr>
   			 <th scope="col">Stock_id</th>
		      <th scope="col">Vender_Name</th>
		      <th scope="col">Product_Name</th>
		      <th scope="col">Date</th>
		      <th scope="col">Bill_No</th>
		      <th scope="col">Quantity</th>
		      <th scope="col">Bill_Image</th>
		      <th scope="col">Status</th>
		      <th scope="col">Action</th>
		    </tr>
			</thead>
			<tbody>
			  	{this.userlist()}
			</tbody>
		</Table>
				</div>


		</div>)
	}
}
export default AddStock;