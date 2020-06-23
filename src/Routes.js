import React, {Component} from 'react';
import {Route} from 'react-router'
import {BrowserRouter, Switch} from 'react-router-dom'
import Ecommerce from './Ecommerce'
import Cart from './Cart'
import App from './App'
import Search from './Search';

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/search" component={Search} />
                </Switch>
            </BrowserRouter>
        )
    }
}