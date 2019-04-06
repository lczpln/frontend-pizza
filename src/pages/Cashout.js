import React, { Component } from 'react';
import { DivCashout } from '../styles';
import PizzaItem from '../components/PizzaItem';
import CashoutBar from '../components/CashoutBar';

export default class Cashout extends Component {
  async componentDidMount() {
    await window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className={DivCashout + "overflow-x-auto"} style={{ minHeight: '435px' }}>
          {this.props.order.length > 0
            ? this.props.order.map(pizza => (
              <PizzaItem key={Math.random() * 1000} pizza={pizza} calcPrice={this.props.calcPrice} buttons={false} />
            ))
            : <h1 className="text-white text-center mx-auto">Seu carrinho está vazio! :(</h1>
          }
        </div>
        <CashoutBar
          addOrder={this.props.addOrder}
          order={this.props.order}
          price={this.props.calcDiscount}
        />
      </React.Fragment>
    );
  }
}
