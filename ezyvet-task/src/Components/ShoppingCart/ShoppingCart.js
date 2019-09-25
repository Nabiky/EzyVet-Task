import React, { Component } from 'react';
import './ShoppingCart.scss';
import ProductContainer from '../Products/Containers/Product.container';
import Cart from '../Cart';

class ShoppingCart extends Component {
    render() {
        return (
            <div className="shoppingcart">
                <div className="topwrapper">
                    <div className="headingwrapper">
                        <h2> Shopping Cart </h2>
                    </div>
                </div>
                <div className="shoppingcart-wrapper">
                    <ProductContainer />
                    <Cart />
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
