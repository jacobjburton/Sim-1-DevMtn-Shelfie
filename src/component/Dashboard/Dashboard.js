import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component
{
    
    render()
    {
        let productDisplay = this.props.inventory.map((product, i) =>
        {
            
            return (
                <div key={i} className="Product_Box"> 
                   {/* {console.log(product)} */}
                    <img src={product.img} alt="productimg" 
                        width="350" height="150" className="Product_Img" />
                    <p className="Product_Data">{product.name}</p>
                    <p className="Product_">{product.price}</p>   
                </div>
            );
        });
        return (
            <div>          
                <Product display={productDisplay}/>
            </div>
        );
    }
}

export default Dashboard;