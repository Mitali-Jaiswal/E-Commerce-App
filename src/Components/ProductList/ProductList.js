import './ProductList.css';
import Product from '../Product/Product';
import  {Component} from "react"
import Title from '../Title/Title';
import { ProductConsumer } from '../../context';

export default class ProductList extends Component {
    
    render() {
    
        return (
           
            <div className="py-5 product-list">
                <div className="continer ">
                    
                    <Title title="BEST SELLER" />

                    <div className="row">
                        <ProductConsumer>
                            {value=>{
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product} />;
                            });
                            }}
                        </ProductConsumer>

                    </div>
                
                </div>
            </div>
        )
    }
}
