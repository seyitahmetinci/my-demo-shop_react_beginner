import React from 'react';

function Product(props) {
    return (
        <div className="product">
            <h2 className="title">${props.title}</h2>
            <p className="price">${props.price}</p>
            <p className="description">${props.description}</p>
        </div>
    );
}

export default Product;