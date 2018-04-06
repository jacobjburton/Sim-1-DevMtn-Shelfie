import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            name: '',
            price: 0,
            img: ''
        };
        
        this.addClick = this.addClick.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    imageInput(link)
    {
        this.setState({ img: link });
    }

    productNameInput(text)
    {
        this.setState({ name: text });
    }

    priceInput(val)
    {
        this.setState({ price: val });
    }

    cancelClick()
    {
        this.setState(
        {
            name: '',
            price: 0,
            img: ''
        });
    }

    addClick()
    {   
        console.log('clicked!');
       // let prod = {name: this.state.name, price: this.state.price, img: this.state.img};
       // console.log(prod)
        
        this.createProduct(this.state.name, this.state.price, this.state.img);
        
        this.setState(
        {
            name: '',
            price: 0,
            img: ''
        });
        this.props.add();
    }

    createProduct(name, price, img)
    {
      console.log("got to axios call")
      axios.post('/api/product', {name, price, img}).then(res => 
      {
        this.setState({ products: res.data });
      });
    }

    render()
    {
        return (
            <div className="Add_Form">
                <img width="200" src={require('../../images/No_Image_Available.jpg')} alt="defaultimg"/>
                <p>Image URL:</p>
                <input value={this.state.img} onChange={(e) => this.imageInput(e.target.value)} />
                <p>Product Name:</p>
                <input value={this.state.name} onChange={(e) => this.productNameInput(e.target.value)} />
                <p>Price:</p>
                <input value={this.state.price} onChange={(e) => this.priceInput(e.target.value)} />
                <br/>
                <button onClick={() => this.cancelClick()} className="Form_Buttons" >Cancel</button>
                <button className="Form_Buttons" onClick={() => this.addClick()}>Add to Inventory</button>
            </div>
        );
    }
}

export default Form;