import './Cart.css';
import Title from '../Title/Title'
import CartColumns from './cartColumns';
import React, { Component } from 'react'
import EmptyCart from './emptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   {
                       value=>{
                           const {cart} = value;
                           if(cart.length>0){
                               return(
                                   <>
                                    <Title title="your cart" />
                                     <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                   </>
                               )
                           }
                           else{
                            return <EmptyCart />;
                           }
                       }
                   }
               </ProductConsumer>
             
           </section>
        )
    }
}
