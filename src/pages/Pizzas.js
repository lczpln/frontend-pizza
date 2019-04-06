import React, { Component } from 'react';

import Loading from '../components/Loading';
import PizzaItem from '../components/PizzaItem';

import api from '../services/api'

export default class Pizzas extends Component {
  state = {
    loading: true,
    pizzas: [],
    ingredients: [],
  }

  getIngredients = async () => {
    try {
      const response = await api.get('/ingrediente')

      await this.setState({ ingredients: response.data })
    } catch (error) {
      return alert('Erro de comunicação com /api/ingrediente')
    }
  }

  getPizzas = async () => {
    try {
      const response = await api.get('/pizza')

      await response.data.map(pizza => {
        let ingredients = [];
        pizza.ingredients.map(ingredient => {
          ingredients.push(
            {
              name: this.state.ingredients.find(element => element.id === ingredient).name,
              price: this.state.ingredients.find(element => element.id === ingredient).price
            }
          )
        })
        this.setState({ pizzas: [...this.state.pizzas, { id: pizza.id, name: pizza.name, ingredients, image: pizza.image }] })
      })

    } catch (error) {
      return alert('Erro de comunicação com /api/pizza')
    }
  }

  async componentDidMount() {
    try {
      await Promise.all([await this.getIngredients(), await this.getPizzas()])
    } catch (error) {
      alert(error.message)
    } finally {
      await this.setState({ loading: false })
      await window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Loading loading={this.state.loading} />
        <div className="animated fadeIn mt-16 pt-3 bg-red-darker">
          {this.state.pizzas.map(pizza => (
            <PizzaItem key={pizza.name} pizza={pizza} ingredients={this.state.ingredients} calcPrice={this.props.calcPrice} addOrderItem={this.props.addOrderItem} buttons={true}/>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
