import './Product.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../../context';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;

        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                
                <div className="card">
                  <ProductConsumer>
                    {(value)=> (
                      <>
                      <div className="img-container p-5"
                       onClick={()=>
                        value.handleDetail(id)
                       }>
                        <Link to="/details" >
                            <img src={img} className="card-img-top" />
                        </Link>
                    </div>
                    <h5 className="text-center">{title}</h5>
                    <p className="text-center">${price}</p>
                    <button
                    className="cart-btn cart-bt "
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>

                      </>
                    )}
                                      </ProductConsumer>
                  
                </div>
            </div>
        )
    }
}
