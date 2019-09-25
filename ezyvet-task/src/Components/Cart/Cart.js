import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Products/Card';
import './Cart.scss';
import '../../Styles/share.scss';

import { roundTwoPrecison } from '../../helpers/constants';

import { updateCart, removeItem } from '../../Store/actionCreators/cartActions';
class Cart extends Component {
    state = {
        currentItemQuantity: 1,
    };

    updateQuantity = (decrOrIncrmt, ItemObj) => {
        let currentQuantity = ItemObj.quantity;

        switch (decrOrIncrmt) {
            case 'increment': {
                currentQuantity = currentQuantity + 1;
                break;
            }
            case 'decrement':
                currentQuantity = currentQuantity - 1;
                if (currentQuantity === 0 || currentQuantity === undefined) {
                    this.props.removeItem(ItemObj);
                }
        }

        this.setState({ currentItemQuantity: currentQuantity });
        const updatedItemObj = { ...ItemObj, quantity: currentQuantity };
        this.props.updateCart(updatedItemObj);
    };

    renderTotalSum = cart => {
        let totalSum = [0];
        cart.map(item => {
            totalSum.push(item.quantity * item.itemPrice);
        });
        let result = totalSum.reduce((acc, currentvalue) => acc + currentvalue);
        return (
            <div>
                {result > 1
                    ? <p> <h3 style={{ display: 'inline' }}>Total : </h3> {`$${roundTwoPrecison(result)}`}</p>
                    : <p> You shopping cart is empty! </p>
                }
            </div>
        );
    };

    renderList = cart => {
        const { removeItem } = this.props;
        return cart.map(item =>
            <li className="cart-list">
                <div className="children">
                    <div className={`item-images ${item.itemName.toLowerCase()}`}/>
                    <p className="child item-name center"> {item.itemName} </p>
                    <p className="child">{`$${roundTwoPrecison(item.quantity * item.itemPrice)}`}</p>

                    <button onClick={() => { this.updateQuantity('increment', item) }}>
                        <span> + </span>
                    </button>

                    <p className="child quantity center"> {item.quantity} </p>
                    <button onClick={() => { this.updateQuantity('decrement', item) }}>
                        <span> - </span>
                    </button>

                    <button onClick={() => { removeItem(item) }}>
                        <span> x </span>
                    </button>
                </div>
            </li>
        );
    };

    render() {
        const { cart } = this.props;
        return (
            <div className="cart">
                <h2 style={{ paddingBottom: '10px' }}> Cart </h2>
                { this.renderList(cart) }
                { this.renderTotalSum(cart) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps, { updateCart, removeItem })(Cart);
