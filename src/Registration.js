import React, { Component } from "react";
import './Ecommerce.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addUser} from './actions/index'
import {Link} from 'react-router-dom';
class Registration extends Component {
    state={
        userDetails:{
            fname: "",
            lname: "",
            email: "",
            password: ""
        },
        message: ""
    }
    handleChange(field,event){
        this.state.userDetails[field]=event.target.value
        this.setState({
            userDetails: this.state.userDetails
        },()=>{
            console.log("userDetails: ",this.state.userDetails)
        })
    }
    registerUser(){
        this.props.addUser(this.state.userDetails)
    }
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 p-0"></div>
            <div className="col-sm-12 col-md-6 col-lg-4 p-0">
            <div className="boxDesign">
            <h3 className="pb-4" style={{ textAlign: "center"}}>Register Here!!</h3>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3 pl-0 pr-3">
              <label className="mr-3">First Name</label>
              <input type="text" className="pl-2 form-control" width="100%" placeholder="John" onChange={this.handleChange.bind(this,"fname")}/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3 pl-0 pr-0">
              <label className="mr-3">Last Name</label>
              <input type="text" className="pl-2 form-control" width="100%" placeholder="peter" onChange={this.handleChange.bind(this,"lname")}/>
              </div>
            </div>
            <div className="row">
            <label className="col-sm-12 col-md-12 col-lg-12 mb-3 pl-0">Email</label>
            <input type="text" className="col-sm-12 col-md-12 col-lg-12 mb-3 pl-2 form-control" width="100%" placeholder="abcd@gmail.com" onChange={this.handleChange.bind(this,"email")}/>
            </div>
            <div className="row">
            <label className="col-sm-12 col-md-12 col-lg-12 mb-3 pl-0">Password</label>
            <input type="text" className="col-sm-12 col-md-12 col-lg-12 mb-3 pl-2 form-control" width="100%" placeholder="********" onChange={this.handleChange.bind(this,"password")}/>
            </div>
            <div style={{textAlign: "center"}}>
            <button className="btn btn-primary" onClick={this.registerUser.bind(this)}>Register</button>
            </div>
            <p style={{textAlign: "center"}} className="mt-2">Exisisting User Login <Link to="/login">Here</Link></p>
            </div>
            </div>
            </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        //productsData: state.productListDetails.products
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addUser: addUser}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration)
