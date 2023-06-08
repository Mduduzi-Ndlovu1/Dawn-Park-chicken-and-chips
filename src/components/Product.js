import React from 'react';
import { product } from '../Data';
import {FaShoppingCart} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Product = () => {
  return (
    <section className='products' id='products'>
        <h1 className='heading'>
            Our <span>Products</span>
        </h1>
        <div className='box-container'>
            {
                product.map((item,index) => (
                    <div className='box'>
                        <div className='icons'>
                            <a href="#" > <FaShoppingCart/> </a>
                            <a href="#" > <FaHeart/> </a>
                            <a href="#" > <FaEye/> </a>
                        </div>
                        <div className='image'>
                            <img src={item.img} alt="" />
                        </div>

                        <div className='content'>
                            <h3>Fresh delights</h3>
                            <div className='price'>
                                R50.00 <span>R20.00</span>
                                </div> 
                                <a href="" className='btn'>Add to Cart</a>

                                                 
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
  )
}

export default Product