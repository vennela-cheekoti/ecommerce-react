import React, {Component} from 'react';
import axios from 'axios';
import './Ecommerce.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cartProductsData} from './actions/index'
//npm i --save axios
class Ecommerce extends Component{
    state={
        productDetails: [],
        selectedProduct: [],
        quantity: 1,
        size: "null"
    }
    componentDidMount(){
        axios.get('https://images.stockal.com/api/products.json')
        .then(response => { //success
            console.log(response)
            this.setState({
                productDetails: response.data.data.products
            }
            // ,()=>{
            //     this.props.createProductsData(this.state.productDetails)
            // }
            )
            console.log(this.state.productDetails)
        })
        .catch(error => {// failure
            console.log(error)
        })
    }
    modelOpen(data){
        console.log("inside modal")
        //var modal = document.getElementById("myModal");
        var modal=this.refs.myModal;
        modal.style.display = "block";
        this.state.selectedProduct=data;
        this.setState({
            selectedProduct: this.state.selectedProduct
        })
    }
    modelClose(){
        //var modal = document.getElementById("myModal");
        var modal=this.refs.myModal;
        modal.style.display = "none";
    }
    quantityChange(event){
        this.setState({
            quantity: event.target.value
        })
    }
    sizeChange(event){
        this.setState({
            size: event.target.value
        })
    }
    addtocart(){
        let cartData={};
        cartData['name']=this.state.selectedProduct.productName;
        cartData['image']=this.state.selectedProduct.searchImage;
        cartData['price']=this.state.selectedProduct.price;
        cartData['quantity']=this.state.quantity;
        cartData['size']=this.state.size;
        this.props.cartProductsData(cartData);
        this.modelClose();
    } 
    render(){
        return(
            <div>
                <div className="ml-4 mr-4">
                <div className="row mt-3">
                    {(this.state.productDetails.map((data,index)=>{
                        return(
                            
                            <div className="col-sm-12 col-md-6 col-lg-4"  key={index}>
                                <div className="boxDesign">
                                <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <img src={data.searchImage} style={{width:"100%", height:"100%"}} className="imageStyling"/>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <h6>{data.productName}</h6>
                                    <p>Price $: {data.price}</p>
                                    <p>Brand Name : <b>{data.brand}</b></p>
                                    <p>Sizes Available: {data.sizes}</p>
                                    <button className="btn btn-success pl-5 pr-5" onClick={this.modelOpen.bind(this,data)}>Buy</button>
                                </div>  
                                </div> 
                                </div>
                            </div>
                        )
                    }))}
                </div>
                </div>   
                <div ref="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={this.modelClose.bind(this)}>&times;</span>
                        <div style={{textAlign: "center", marginBottom: "20px"}}>
                        <img src={this.state.selectedProduct.searchImage} style={{width: "40%", height: "40%"}} />
                        </div>
                        <div>
                            <div>
                            <label htmlFor="quantity" style={{paddingLeft: "120px"}}>Quantity</label>
                            <label htmlFor="size" style={{paddingRight: "120px", float: "right"}}>Size</label>
                            </div>
                            <div>
                            <select id="quantity" className="pl-4 pr-4 pt-2 pb-2 mt-2 quantitydropdownStyling" onChange={this.quantityChange.bind(this)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            {(this.state.selectedProduct.sizes) ?
                            <select id="size" className="pl-4 pr-4 pt-2 pb-2 mt-2 sizedropdownStyling" onChange={this.sizeChange.bind(this)}>
                                <option>select</option>
                            
                       
                        {(this.state.selectedProduct.sizes.split(',').map((data, index) => {
                            console.log(data)
                          return(
                            <option value={data} key={index}>{data}</option>
                          );
                        }))}
                      
                            </select>  : null}
                            </div> 
                        </div>
                        {/* <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" style={{float: "right" ,marginRight: "120px"}}type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Select Size
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                            {(this.state.selectedProduct.sizes)?
                            <span>
                            {(this.state.selectedProduct.sizes.split(',').map((data,index)=>{
                                return(
                                    <button className="dropdown-item" type="button">{data}</button>
                                )
                            }))}</span>: "-"
                            }
                        
                        </div>
                        </div> */}
                        {/* </div> */}
                    
                    <div style={{textAlign: "center"}} className="pt-4 pb-4">
                    <button className="btn btn-success pl-4 pr-4" onClick={this.addtocart.bind(this)}>Add to cart</button>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return{
        //productsData: state.productListDetails.products
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({cartProductsData: cartProductsData}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Ecommerce)
