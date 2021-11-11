import React from 'react'
import './ProductHome.css';
import formatCurrency from '../../util';

export default function ProductHome(props) {
    const {product} = props;
    return (
<>
    <li key={product._id}>
        <div className="box-product">
            <img className="product-image" src={product.image} alt={product.name} />
            <div>
                <h2> {product.name} </h2>
            </div>
            <div className="box-product-detail">
                <span className="product-detail-price"> {formatCurrency(product.price)} </span>
                <span className="product-detail-heart"> 
                    <i className="fas fa-heart"> {product.heart} </i> 
                </span>
            </div>
        </div>
    </li>
</>
    )
}
