import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './Ecommerce.css'
import Search from './Search'


export default class Navigation extends Component{
    state={
        search: ""
    }
    handleChange(event){
        this.setState({
            search: event.target.value
        })
        console.log("handle change")
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">SSS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item active">
                <Link to="./" className="navbarStyling">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="./cart" className="navbarStyling">Cart</Link>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Kids</a>
                </li> */}
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{color: "black"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Men</a>
                <a className="dropdown-item" href="#">Women</a>
                <a className="dropdown-item" href="#">Kids</a>
                </div>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange.bind(this)}/>
                <Link to="./search"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                </form>
                </div>
             
                </nav>
            </div>
        )
    }
}