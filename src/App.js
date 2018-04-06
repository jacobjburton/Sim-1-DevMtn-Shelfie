import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component 
{
  constructor()
  {
    super();

    this.state =
    {
      products: []      
    };


  }

  componentDidMount()
  {
    axios.get('/api/inventory').then(res =>
    {
      this.setState({ products: res.data });
    });
  }


  

  render() 
  {
    return (
      <div className="App">
        <Header />
        <div className="Body">
          <Dashboard inventory={this.state.products}/>
          <Form add={this.componentDidMount}/>
        </div>          
      </div>
    );
  }
}

export default App;
