import React, {Component} from 'react'
import axios from 'axios'

export default class Practice extends Component{
    state={
        data: []
    }
    componentDidMount(){
        axios.get('http://images.stockal.com/api/products.json').then(response=>{
            this.setState({
                data: response.data.data.products
            })
        })
    }
    render(){
        return(
            <div>
                <select>
                {this.state.data.map((da,index)=>{
                    return(
                      
                            <option>{da.productName}</option>
                       
                    )
                    
                })}
                </select>
            </div>
        )
    }
}

