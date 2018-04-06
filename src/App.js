import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component 
{
  constructor()
  {
    super();

    this.state =
    {
      products: 
      [
        {
          name: "pizza",
          price: 50,
          imgUrl: "http://www.hellthyjunkfood.com/wp-content/uploads/Pizza-Inside-A-Burger.jpg"
        },
        {
          name: "this",
          price: 10,
          imgUrl: 'https://www.fastweb.com/uploads/article_photo/photo/2036316/crop635w_three-things-you-need-to-know-about-financial-aid-now.jpg'  
        },
        {
          name: 'this too',
          price: 123,
          imgUrl: "https://codelabs.developers.google.com/codelabs/androidthings-assistant/img/81a8bf67571118b9.png"
        }
      ]
    };
  }

  render() 
  {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.products}/>
        <Form />        
      </div>
    );
  }
}

export default App;
