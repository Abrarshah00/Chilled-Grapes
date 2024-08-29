import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.image} alt="Car" />
            <div className="item-details">
                <h4>{product.product_name}</h4>
                <h4 className='product-price'>{product.price}</h4>
            </div>
        </div>
    );
}

export default ProductCard;
