import React,{ Component } from 'react';
import axios from 'axios';
import RecordListb from './RecordListb';
import {Table} from "tabler-react";

class AddBulding extends Component{
	constructor(props) {
	  super(props);
	  this.onChangeBuldingname = this.onChangeBuldingname.bind(this); 
	  this.onChangeBuldingaddress = this.onChangeBuldingaddress.bind(this);
	  this.onChangeArea = this.onChangeArea.bind(this);
	  this.onChangeBuldingstate = this.onChangeBuldingstate.bind(this);
	  this.onChangeBuldingcity = this.onChangeBuldingcity.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);

	  this.state = {
	  	bulding_name: '',
	  	bulding_address: '',
	  	bulding_area: '',
	  	bulding_state: '',
	  	bulding_city: '',
	  	bulding:[]
	  } 

	}	
	onChangeBuldingname(e){
		this.setState({
			bulding_name:e.target.value
		});
	}
	onChangeBuldingaddress(e){
		this.setState({
			bulding_address:e.target.value
		});
	}
	onChangeArea(e){
		this.setState({
			bulding_area:e.target.value
		});
	}
	onChangeBuldingstate(e){
		this.setState({
			bulding_state:e.target.value

		});
	}
	onChangeBuldingcity(e){
		this.setState({
			bulding_city:e.target.value
		});
	}
	

	onSubmit(e){
		e.preventDefault();

		const insertobject = {
			bulding_name: this.state.bulding_name,
			bulding_address: this.state.bulding_address,
			bulding_area: this.state.bulding_area,
			bulding_state: this.state.bulding_state,
			bulding_city: this.state.bulding_city
		};
			axios.post('http://localhost/React/buding.insert.php', insertobject)
		.then(res => {
			console.log(res.data);
			this.buldingDataView();
		});

		this.setState({
	  	bulding_name: '',
	  	bulding_address: '',
	  	bulding_area: '',
	  	bulding_state: '',
	  	bulding_city: ''
	  

	  	
	  })



		// console.log(insertobject);
	}
	componentDidMount(){
  	this.buldingDataView();
  }

  buldingDataView(){
  		axios.get('http://localhost/React/buildview.php')
  	.then(response => {
  		this.setState({ bulding:response.data });
  	})
  	.catch(function (error){
  			console.log(error);
  	});

  }

//   componentDidUpdate(){
//   	axios.get('http://localhost/React/buildview.php')
//   	.then(response => {
//   		this.setState({ bulding:response.data });
//   	})
// }
  userlist(){
  	return this.state.bulding.map(function(object,i){
  		return <RecordListb obj={object}key={i} />
  	})
  }

	render(){
		return(
			<div className="p-5">
			
			<form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.bulding_name} 
				onChange={this.onChangeBuldingname}  placeholder="BuldingName"/>
			</div>
			<div className="col-6">
				<input type="text" className="form-control " 
				value={this.state.bulding_address}
				onChange={this.onChangeBuldingaddress} placeholder="BuldingAddress" />
			</div>
			<div className="col-6 p-3">
			<input type="text" className="form-control"
				value={this.state.bulding_area}
				onChange={this.onChangeArea}placeholder="BuldingArea" />
			</div>
			<div className="col-6 p-3">
				<input type="text" className="form-control"
				value={this.state.bulding_state}
				onChange={this.onChangeBuldingstate} placeholder="BuldingState" />
			</div>
			<div className="col-6">
				<input type="text" className="form-control"
				value={this.state.bulding_city}
				onChange={this.onChangeBuldingcity} placeholder="BuldingCity"/>
			</div>
			</div>
				<div className="form-group text-center p-3">
				<input type="submit" className="btn btn-primary"
						value="Addbulding" />
				</div>
				</form>
			<div className="p5">
<Table>
  <thead>
    <tr>
      <th scope="col">Bulding_Id</th>
      <th scope="col">Buldingname</th>
      <th scope="col">BuldingAddress</th>
      <th scope="col">Area</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
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

export default AddBulding;