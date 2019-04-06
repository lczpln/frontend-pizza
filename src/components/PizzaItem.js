import React from 'react';

import { Button as buttonStyle } from '../styles';

import ModalSuccess from './ModalSuccess';
import ModalAddIngredient from './ModalAddIngredient';

class PizzaItem extends React.Component {
  state = {
    modalSuccess: false,
    modalAddIngredient: false,
    editingNow: {},
  }

  addIngredient = (ingredient) => {
    const { editingNow } = this.state;

    this.setState({ editingNow: { name: editingNow.name, image: editingNow.image, ingredients: [...editingNow.ingredients, ingredient] } });
  }

  disposeModal = (name) => {
    this.setState({ [name]: false });
  }

  showModal = (name) => {
    this.setState({ [name]: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.modalSuccess
          ? <ModalSuccess disposeModal={this.disposeModal} />
          : null
        }
        {this.state.modalAddIngredient
          ? <ModalAddIngredient
            addOrderItem={this.props.addOrderItem}
            addIngredient={this.addIngredient}
            calcPrice={this.props.calcPrice}
            disposeModal={this.disposeModal}
            showModal={this.showModal}
            editingNow={this.state.editingNow}
            ingredients={this.props.ingredients}
          />
          : null
        }
        <article key={this.props.pizza.name}
          style={{ transition: 'all .6s ease', minHeight: '445px', height: '100%' }}
          className="lg:w-4/5 mx-auto hover:bg-red-darkest animated fadeInUp shadow-inner py-10 px-4 md:px-10 bg-red-darker text-white flex-col flex md:flex-row md:items-center md:justify-between flex-1">
          <div className="animated fadeIn md:p-4 w-2/3 mx-auto md:w-1/2 flex justify-center items-center">
            <img className="rounded-full w-full mx-auto"
              style={{ maxWidth: '550px', minWidth: '150px', width: '100%' }}
              src={this.props.pizza.image}
              alt={this.props.pizza.image}
            />
          </div>
          <div className="flex flex-col justify-between items-center p-4 md:w-1/2 h-full">
            <div className="animated fadeInDown p-4 flex flex-col justify-center items-center">
              <h1 className="mb-2 md:text-3xl lg:text-5xl">{this.props.pizza.name}</h1>
              <h3 className="mb-1 md:text-1xl lg:text-3xl">Ingredientes:</h3>
              {this.props.pizza.ingredients.map(ingredient => (
                <p key={ingredient.name + Math.random() * 100} className="text-sm md:text-sm lg:text-base">{ingredient.name}</p>
              ))}
              <p className="bg-green px-4 py-2 mt-5 rounded font-bold shadow-md">R$ {this.props.calcPrice(this.props.pizza.ingredients).toFixed(2)}</p>
            </div>
            {!this.props.buttons
              ?
              null
              :
              <div className="flex flex-col justify-between items-center">
                <button onClick={() => { this.props.addOrderItem(this.props.pizza, { price: this.props.calcPrice(this.props.pizza.ingredients) }); this.showModal("modalSuccess") }}
                  className={buttonStyle + "mt-5"}>Adicionar ao carrinho</button>
                <button onClick={() => { this.showModal("modalAddIngredient"); this.setState({ editingNow: { name: this.props.pizza.name, image: this.props.pizza.image, ingredients: this.props.pizza.ingredients } }) }}
                  className={"no-underline mt-5" + buttonStyle}>Adicionar ingredientes</button>
              </div>
            }
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default PizzaItem;