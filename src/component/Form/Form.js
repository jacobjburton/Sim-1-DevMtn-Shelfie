import React, { Component } from 'react';


class Form extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            productName: '',
            price: 0,
            imgUrl: ''
        };
        
        this.addClick = this.addClick.bind(this);
    }

    imageInput(link)
    {
        this.setState({ imgUrl: link });
    }

    productNameInput(text)
    {
        this.setState({ productName: text });
    }

    priceInput(val)
    {
        this.setState({ price: val });
    }

    cancelClick()
    {
        this.setState(
        {
            productName: '',
            price: 0,
            imgUrl: ''
        });
    }

    addClick()
    {

    }

    render()
    {
        return (
            <div className="Add_Form">
                <img width="200" src={require('../../images/No_Image_Available.jpg')} alt="defaultimg"/>
                <p>Image URL:</p>
                <input value={this.state.imgUrl} onChange={(e) => this.imageInput(e.target.value)} />
                <p>Product Name:</p>
                <input value={this.state.productName} onChange={(e) => this.productNameInput(e.target.value)} />
                <p>Price:</p>
                <input value={this.state.price} onChange={(e) => this.priceInput(e.target.value)} />
                <br/>
                <button onClick={() => this.cancelClick()} className="Form_Buttons" >Cancel</button>
                <button className="Form_Buttons" >Add to Inventory</button>
            </div>
        );
    }
}

export default Form;