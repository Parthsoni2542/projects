
import React, { Component } from "react";

// import "tabler-react/dist/Tabler.css";

import {Form, Card } from "tabler-react";

class LoginPage extends Component {
  render() {
    return (
      <Card className="container col-5">
        <Card.Header className="form-control col container">
          <Card.Title>
            LoginPage
          </Card.Title>
          <br></br>
          <Form.Input placeholder='EnterEmailAddress' name="catname"/>
          <br></br>
          <Form.Input placeholder='EnterPassword' name="catname"/>
      <br></br>
      <div className="text-center">
        <input type="submit" className="btn btn-primary text-center"
            value="Login"  />
   </div>
    
        </Card.Header>
      </Card>
    );
  }
}
export default LoginPage;