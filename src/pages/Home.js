import React, { Component } from 'react';

import {
  Button as buttonStyle,
  DivHomeRedFirst as divRedStyle,
  DivHomeWhiteFirst as divWhiteStyle
} from '../styles';

import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

export default class Home extends Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false })
      window.scrollTo(0, 0);
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Loading loading={this.state.loading} />
        <div className="animated fadeIn delay-1s text-sm lg:text-lg">
          <div className={divRedStyle}
            style={{ minHeight: '435px' }}>
            <div className="flex flex-col justify-center items-center md:p-8 p-0">
              <h1 className="text-white md:text-black">Escolha a sua queridinha !</h1>
              <span className="text-left mt-4 text-grey-light md:text-grey-dark md:mt-2">Feitas não só com os melhores ingredientes, feitas com amor !</span>
              <Link to="/pizzas" className={buttonStyle + "mt-5"}>Ver menu</Link>
            </div>
            <div className="p-10 justify-center items-center hidden md:flex">
              <img src={require('../images/pizzaHomeOne.png')} alt="pizzaHomeOne" width={250} height={250} />
            </div>
          </div>
          <div className={divWhiteStyle}
            style={{ minHeight: '435px' }}>
            <div className="p-10 justify-center items-center hidden md:flex">
              <img src={require('../images/pizzaHomeTwo.png')} alt="pizzaHomeTwo" width={250} height={250} />
            </div>
            <div className="w-screen md:w-auto flex flex-col justify-center items-center md:p-8 p-0" style={{ minWidth: '50%' }}>
              <h1>Tá afim de algo novo ?</h1>
              <span className="text-left mt-4 text-grey-dark md:text-grey md:mt-2">Aqui você pode criar o seu próprio sabor de pizza com os ingredientes disponíveis, mas também pode personalizar uma já existente.</span>
              <Link to="/personalizar" className={buttonStyle + "mt-5"}>Personalizar</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
