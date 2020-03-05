import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './Ecommerce.css'
import Navigation from './Navigation'
import {deleteProducts} from './actions'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom';


function Cart(props){
    const [productsArray, setProductsArray] = useState([])
	useEffect(() => {
		setProductsArray(props.getproductsData);
    })
    const deleteProduct=(ind)=>{
        props.deleteProducts(ind);
    }
    let tot=0;
    return(
            <div>
                <Navigation/>
                <h4 style={{marginLeft: "45%", marginTop: "40px"}}>MY SHOPPING CART</h4>
                <div className="row">
                {(productsArray.length>0)?
                    <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="ml-5 mr-4">
                <div className="row mt-3">
                {(productsArray.map((data,index)=>{
                    return(              
                        <div key={index}>
                                <div className="boxDesign1">
                                    <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <img src={data.image} style={{width:"50%", height:"100%"}}/>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <h6>{data.name}</h6>
                                        <p>Price $: {data.price}</p>
                                        <p>Quantity: {data.quantity}</p>
                                        <p>Size: {data.size}</p>
                                        <p>Edit</p>
                                        <p onClick={deleteProduct.bind(null,index)} style={{color: "blue", cursor: "pointer"}}>Delete</p>
                                    </div>  
                                    </div> 
                                    </div>
                        </div>
                    )
                    }))}
                </div>
                </div> 
                </div>: <div style={{marginLeft: "46%", marginTop: "40px"}} >
                    <h5>Your Cart is Empty!!</h5>
                    <Link to="./"><button className="mt-4 ml-3 btn btn-dark">GO SHOPPING</button></Link>
                    </div>
                }
                
                {(productsArray.map((data,index)=>{
                    tot=tot+(data.quantity*data.price);
                    console.log("tot", tot);
                }))}
                {(productsArray.length>0)?
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="boxDesign2">
                <h5 style={{marginTop: "20px"}}>ORDER TOTAL: {tot}</h5>
                <button className="btn btn-success mt-4">CHECKOUT</button>
                </div>
                </div>: ""
                }
                
                
                </div>
                
            </div>
        );
}

function mapStateToProps(state){
    console.log("inside fetching data")
    return{
        getproductsData: state.productListDetails.products
    };  
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteProducts: deleteProducts}, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart);


