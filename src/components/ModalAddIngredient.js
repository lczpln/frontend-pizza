import React from 'react';
import { Button } from '../styles';

const getUserIngredient = (name, editingNow) => {
  return editingNow.ingredients.filter(ingredient => ingredient.name === name).length || 0;
}

const ModalAddIngredient = (props) => (
  <div className="z-40 animated fadeIn fixed pin flex justify-center items-center" style={{ background: 'rgba(0,0,0,.6)' }}>
    <div className="animated slideInDown flex flex-col items-center justify-center p-8 mt-20 bg-red-darker rounded shadow-lg">
      <span className="font-bold text-white">Quais ingredientes deseja adicionar a sua pizza ?</span>
      <ul className="list-reset text-white w-full text-center mt-5">
        {props.ingredients.map(ingredient => (
          <li key={ingredient.name} className="p-2 flex justify-between items-center w-full">
            <span>{getUserIngredient(ingredient.name, props.editingNow)}</span>
            <button onClick={() => props.addIngredient(ingredient)}
              className={Button}>{ingredient.name}</button>
            <span className="text-white bg-green px-4 py-2 rounded font-bold shadow-md">R$ {ingredient.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-around items-center w-full mt-5">
        <button className={Button + "mt-5"} onClick={() => { props.addOrderItem(props.editingNow, { price: props.calcPrice(props.editingNow.ingredients) }); props.showModal("modalSuccess") }}>Adicionar ao carrinho</button>
        <button className={Button + "mt-5"} onClick={() => props.disposeModal("modalAddIngredient")}>Cancelar</button>
      </div>
    </div>
  </div>
);

export default ModalAddIngredient;