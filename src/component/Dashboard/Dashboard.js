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
                    <img src={product.imgUrl} alt={"productimg"} width="350" height="150" />
                    <p className="Product_Name">{product.name}</p>
                    <p className="Product_Price">{product.price}</p>   
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