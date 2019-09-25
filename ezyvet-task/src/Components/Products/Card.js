import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Store/actionCreators/cartActions';
import './Products.scss';
import '../../Styles/share.scss';
import { roundTwoPrecison } from '../../helpers/constants';

class Card extends Component {
    addToCart = (itemName, itemPrice, quantity) => {
        const itemTemplate = {
            itemName,
            itemPrice,
            quantity,
        };
        this.props.addItem(itemTemplate);
    };

    searchItemInStore = itemName => {
        return this.props.cart.find(item => {
            if (item.itemName == itemName) {
                return true;
            }
        });
    }; 

    render() {
        const { itemName, itemPrice } = this.props;
        return (
            <div className="card ">
                <div className={`item-images ${itemName.toLowerCase()}`} />

                <div> {itemName} </div>
                <div> {`$${roundTwoPrecison(itemPrice)}`} </div>
                {this.searchItemInStore(itemName) === undefined || this.searchItemInStore(itemName) === 0
                    ? <button className="cart-button" 
                        onClick={() => this.addToCart(itemName, itemPrice, 1)}>
                          Add To Cart
                      </button>

                    : <button className="cart-button"  
                        disabled> Add To Cart 
                     </button>}
            </div>
        );
    }
}

export default connect(null, { addItem })(Card);
