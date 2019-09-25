import React from 'react';
import './Products.scss';
import Card from './Card';

const renderList = (catalog, cart) => {
    return catalog.map(product => {
        return (
            <Card itemName={product.name} itemPrice={product.price} cart={cart} />
        );
    });
};

const Products = ({ catalog, cart }) => {
    return (
        <div className="products-items">
            <h2> Products </h2>
            <section className="cards-wrapper">
                { renderList(catalog, cart) }
            </section>
        </div>
    );
};

export default Products;
