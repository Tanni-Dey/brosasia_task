import React from 'react';
import './Product.css'
import star from '../../../images/star.png'

const Product = ({ product }) => {
    const { id, name, img, price, ratings } = product;
    let stars = [];
    for (let i = 1; i <= ratings; i++) {
        stars.push(i)
    }
    return (
        <div className='single_product'>
            <img className='single_product_img' src={img} alt="img" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <div>
                {
                    stars.map((s, index) => <img key={index} className='star' src={star} alt="img" />)
                }
            </div>
            <button className='single_product_btn'>Order Now</button>
        </div>
    );
};

export default Product;