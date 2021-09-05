import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import './Details.css'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,company,img,info,price,title,inCart}=
                    value.detailProduct;
                    return(
                        <div >
                            <h1 className="text-center">{title}</h1>

                            <div className="details">
                                <div>
                                    <img src={img}/>
                                </div>
                                <div>
                                    <h3>model : {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                        price : <span>$</span>
                                        {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product :
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div >
                                        <Link className="button b1" to="/">Back To Products</Link>
                                        <button className="b2" onClick={(id)=>{
                                            value.addToCart(id);
                                        }}>
                                            {inCart ? "inCart" : "Add To Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
    
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
