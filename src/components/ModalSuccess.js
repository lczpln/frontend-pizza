import React from 'react';
import { Button } from '../styles';

const ModalSuccess = (props) => (
  <div className="z-50 animated fadeIn fixed pin flex justify-center items-center" style={{ background: 'rgba(0,0,0,.6)' }}>
    <div className="animated slideInDown flex flex-col items-center justify-center p-10 bg-red-darker rounded shadow-lg">
      <span className="font-bold text-white">Pizza adicionada com sucesso.</span>
      <button className={Button + "mt-5"} onClick={() => { props.disposeModal("modalSuccess"); props.disposeModal("modalAddIngredient") }}>OK</button>
    </div>
  </div>
);

export default ModalSuccess;