import React,{ Component } from 'react';
import axios from 'axios';
import Displayuser from './Displayuser';
import {Table } from "tabler-react";


class Adduser extends Component{
	constructor(props) {
	  super(props);
	  this.onChangeFirstName = this.onChangeFirstName.bind(this); 
	  this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
	  this.onChangeLastName = this.onChangeLastName.bind(this);
	  this.onChangeEmail = this.onChangeEmail.bind(this);
	  this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
	  this.onChangeMobileNo2 = this.onChangeMobileNo2.bind(this);
	  this.onChangePassword = this.onChangePassword.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);

	  this.state = {
	  	first_name: '',
	  	middle_name: '',
	  	last_name: '',
	  	email: '',
	  	mobile_no: '',
	  	mobile_no2: '',
	  	password:'',
	  	users:[]
	  } 

	}	
	onChangeFirstName(e){
		this.setState({
			first_name:e.target.value
		});
	}
	onChangeMiddleName(e){
		this.setState({
			middle_name:e.target.value
		});
	}
	onChangeLastName(e){
		this.setState({
			last_name:e.target.value
		});
	}
	onChangeEmail(e){
		this.setState({
			email:e.target.value

		});
	}
	onChangeMobileNo(e){
		this.setState({
			mobile_no:e.target.value
		});
	}
	onChangeMobileNo2(e){
		this.setState({
			mobile_no2:e.target.value
		});
	}
	onChangePassword(e){
		this.setState({
			password:e.target.value
		});
	}
	

	onSubmit(e){
		e.preventDefault();

		const insertobject = {
			first_name: this.state.first_name,
			middle_name: this.state.middle_name,
			last_name: this.state.last_name,
			email: this.state.email,
			mobile_no: this.state.mobile_no,
			mobile_no2: this.state.mobile_no2,
			password: this.state.password
		};
			axios.post('http://localhost/React/user.insert.php', insertobject)
		.then(res => {
			console.log(res.data);
			this.userDataview();
		});

		this.setState({
	  	first_name: '',
	  	middle_name: '',
	  	last_name: '',
	  	email: '',
	  	mobile_no: '',
	  	mobile_no2: '',
	  	password:''
	  

	  	
	  })
		console.log(insertobject);
	}
	componentDidMount(){
		this.userDataview();
  	
  }

  userDataview(){
  	axios.get('http://localhost/React/userview.php')
  	.then(response => {
  		this.setState({ users:response.data });
  	})
  	.catch(function (error){
  			console.log(error);
  	});
  }
  // componentDidUpdate(){
  // 	axios.get('http://localhost/React/userview.php')
  // 	.then(response => {
  // 		this.setState({ users:response.data });
  // 	})
  // }
  userlist(){
  	return this.state.users.map(function(object,i){
  		return <Displayuser obj={object}key={i} />
  	})
  };
	render(){
		return(
			<div className="p-5">
			<form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col-4">
				<input type="text" className="form-control"
				value={this.state.first_name} 
				onChange={this.onChangeFirstName} placeholder="FirstName" />
			</div>
			<div className="col-4">
				<input type="text" className="form-control" 
				value={this.state.middle_name}
				onChange={this.onChangeMiddleName} placeholder="MiddleName" />
			</div>
			<div className="col-4">
				<input type="text" className="form-control "
				value={this.state.last_name}
					onChange={this.onChangeLastName} placeholder="LastName" />
			</div>
			<div className="col-6 p-3 ">
				<input type="text" className="form-control"
				value={this.state.email}
				onChange={this.onChangeEmail} placeholder="EmailAddrees" />
			</div>
			<div className="col-6 p-3">
				<input type="text" className="form-control"
				value={this.state.mobile_no}
				onChange={this.onChangeMobileNo} placeholder="MobileNo*" />
			</div>
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.mobile_no2}
				onChange={this.onChangeMobileNo2} placeholder="MobileNo2" />
			</div>
			<div className="col-6">
				<input type="password" className="form-control"
				value={this.state.password}
				onChange={this.onChangePassword} placeholder="Password" />
			</div>
			</div>
				<div className="form-group p-3 text-center">
				<input type="submit" className="btn btn-primary"
						value="AddUser" />
				</div>
				</form>
			<div className="p-3">
<Table>
  <thead>
    <tr>
      <th scope="col">User_Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">MiddleName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">MobileNo</th>
      <th scope="col">MobileNo2</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.userlist()}
  </tbody>
</Table>
</div>
			
			</div>

		)
	}
}

export default Adduser;