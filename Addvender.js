import React,{ Component } from 'react';
import axios from 'axios';
import {Table } from "tabler-react";
import RecordList from './RecordList';


class Addvender extends Component{
	constructor(props) {
	  super(props);
	  this.onChangeVendername = this.onChangeVendername.bind(this); 
	  this.onChangeVenderemail = this.onChangeVenderemail.bind(this);
	  this.onChangeAddress = this.onChangeAddress.bind(this);
	  this.onChangeState = this.onChangeState.bind(this);
	  this.onChangeCity = this.onChangeCity.bind(this);
	  this.onChangeMobileno = this.onChangeMobileno.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);

	  this.state = {
	  	vender_name: '',
	  	vender_email: '',
	  	vender_address: '',
	  	vender_state: '',
	  	vender_city: '',
	  	vender_mo: '',
	 	venders:[]
	  } 

	}	
	onChangeVendername(e){
		this.setState({
			vender_name:e.target.value
		});
	}
	onChangeVenderemail(e){
		this.setState({
			vender_email:e.target.value
		});
	}
	onChangeAddress(e){
		this.setState({
			vender_address:e.target.value
		});
	}
	onChangeState(e){
		this.setState({
			vender_state:e.target.value

		});
	}
	onChangeCity(e){
		this.setState({
			vender_city:e.target.value
		});
	}
	onChangeMobileno(e){
		this.setState({
			vender_mo:e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();

		const insertobject = {
			vender_name: this.state.vender_name,
			vender_email: this.state.vender_email,
			vender_address: this.state.vender_address,
			vender_state: this.state.vender_state,
			vender_city: this.state.vender_city,
			vender_mo: this.state.vender_mo
		};
			axios.post('http://localhost/React/insert.php', insertobject)
		.then(res => {
			console.log(res.data);
			this.venderDataFeatch();
		});

		this.setState({
	  	vender_name: '',
	  	vender_email: '',
	  	vender_address: '',
	  	vender_state: '',
	  	vender_city: '',
	  	vender_mo:''

	  	
	  })



		// console.log(insertobject);
	}
	componentDidMount(){
		this.venderDataFeatch();
	}

  venderDataFeatch(){
  	axios.get('http://localhost/React/view.php')
  	.then(response => {
  		this.setState({ venders:response.data });
  	})
  	.catch(function (error){
  			console.log(error);
  	});
  }
  //  componentDidUpdate(){
  // 	axios.get('http://localhost/React/view.php')
  // 	.then(response => {
  // 		this.setState({ venders:response.data });
  // 	})
  	
  // }
  userlist(){
  	return this.state.venders.map(function(object,i){
  		return <RecordList obj={object}key={i} />
  	})
  }
	render(){
		return(
			<div className="p-5">

		
			<form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.vender_name} 
				onChange={this.onChangeVendername} placeholder="VenderName" required />
			</div>
			<br>
			</br>
			<div className="col-6">
				<input type="text" className="form-control p-3" 
				value={this.state.vender_email}
				onChange={this.onChangeVenderemail} placeholder="VenderEmail" required/>
			</div>
			<br>
			</br>
			<div className="col-6 p-3 ">
				<input type="text" className="form-control"
				value={this.state.vender_address}
					onChange={this.onChangeAddress} placeholder="VenderAddress" required/>
			</div>
		
		
			<div className="col p-3">
				<input type="text" className="form-control"
				value={this.state.vender_state}
				onChange={this.onChangeState} placeholder="VenderState" required/>
			</div>
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.vender_city}
				onChange={this.onChangeCity}  placeholder="VenderCity" required/>
			</div>
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.vender_mo}
				onChange={this.onChangeMobileno} placeholder="VenderMobileNo" required/>
			</div>
			</div>
				<div className="form-group text-center p-3">
				<input type="submit" className="btn btn-primary"
						value="Addvender" />
				</div>

				</form>

				
  <h1>VenderData</h1>
  <br>
  </br>
  <Table>
    <thead>
    <tr>
      <th scope="col">vender_id</th>
      <th scope="col">vender_name</th>
      <th scope="col">vender_email</th>
      <th scope="col">vender_address</th>
      <th scope="col">vender_state</th>
      <th scope="col">vender_city</th>
      <th scope="col">vender_mo</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
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

export default Addvender;