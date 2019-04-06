import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Narvbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import Personalizar from './pages/Personalizar';
import Cashout from './pages/Cashout';

import api from './services/api';

class App extends Component {
  state = {
    order: [],
  }

  getOrder = async () => {
    try {
      const response = await api.get('/pedido');

      this.setState({ order: response.data })
    } catch (error) {

    }
  }

  addOrder = async (order) => {
    if (order.length <= 0) return alert('O carrinho está vazio.')

    try {
      const response = await api.put(`/pedido/1`, order);

      if (!response) return alert('Ocorreu um erro ao realizar o pedido!');

      await alert('Pedido realizado com sucesso!');

      return document.location.replace('/');
    } catch (error) {
      return alert(error.message);
    }
  }

  addOrderItem = async (item, price) => {
    const pizzaToAdd = Object.assign(item, price)

    await this.setState({ order: [...this.state.order, pizzaToAdd] });
  }

  getOrderCount = () => {
    const { order } = this.state;

    return order.length;
  }

  calcPrice = (array) => {
    let price = 0;

    array.map(item => {
      price = price + item.price
    })

    return price;
  }

  isLight = (pizza) => {
    const checkIngredient = pizza.filter(ingredient => ingredient.name.toLowerCase() === 'bacon');

    if (checkIngredient.length <= 0) return true;

    return false;
  }

  isDoubleCheese = (pizza) => {
    const checkIngredient = pizza.filter(ingredient => ingredient.name.toLowerCase() === 'queijo');

    if (checkIngredient.length <= 1) return false;

    const cheesePrice = pizza.find(ingredient => ingredient.name.toLowerCase() === 'queijo').price;

    return [checkIngredient.length / 2, cheesePrice];
  }

  calcDiscount = () => {
    const { order } = this.state;

    if (order.length <= 0) return 0;

    let price = 0;

    order.map(item => {
      let itemPrice = item.price;
      const isCheese = this.isDoubleCheese(item.ingredients);

      if (this.isLight(item.ingredients)) itemPrice = itemPrice - (item.price * 0.1);

      if (isCheese !== false) itemPrice = itemPrice - (isCheese[0] * isCheese[1]);

      price = price + itemPrice;
    })
    return Number(price).toFixed(2);
  }

  render() {
    return (
      <div className="select-none">
        <BrowserRouter>
          <Navbar getOrderCount={this.getOrderCount} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pizzas" render={(props) => <Pizzas {...props} addOrderItem={this.addOrderItem} calcPrice={this.calcPrice} />} />
            <Route exact path="/personalizar" component={Personalizar} />
            <Route exact path="/cashout" render={(props) => <Cashout {...props} order={this.state.order} calcPrice={this.calcPrice} calcDiscount={this.calcDiscount} addOrder={this.addOrder} />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
