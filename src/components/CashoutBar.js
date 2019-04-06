import React from 'react';
import { Button } from '../styles';

const CashoutBar = (props) => (
  <div className="flex justify-between items-center fixed pin-b w-full p-3 bg-red-darker z-10">
    <div className="">
      <span className="text-white bg-green px-4 py-2 rounded font-bold shadow-md">TOTAL: R$ {props.price()}</span>
    </div>
    <div>
      <button onClick={() => props.addOrder(props.order)}
      className={Button + "mt-0"}>CASHOUT</button>
    </div>
  </div>
);

export default CashoutBar;