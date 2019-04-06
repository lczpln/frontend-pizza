import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <header id="navbar" className="z-10 fixed pin-t bg-red-darker p-5 px-6 w-full flex justify-center">
    <Link to="/" className="flex items-center justify-center no-underline">
      <img src={require('../images/pizzaIcon.png')} alt="pizzaIcon" width={35} height={35} />
      <h1 className="ml-2 text-white">Pizza App</h1>
    </Link>
    <div className="flex flex-1 justify-end items-center">
      <Link to="/cashout">
        <img className="relative" src={require('../images/price-tag.svg')} alt="price-tag" width={35} height={35} />
        <span className="rounded-full bg-red text-white font-bold px-2 py-1 absolute font-mono" style={{ bottom: '10px', right: '15px' }}>{props.getOrderCount()}</span>
      </Link>
    </div>
  </header>
);

export default Navbar;