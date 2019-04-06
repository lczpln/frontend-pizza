import React from 'react';

import { Button as buttonStyle } from '../styles';

const Footer = (props) => (
  <footer className="md:mb-10 h-screen md:h-auto p-10 flex flex-col items-center justify-center bg-black text-white md:bg-white md:text-black" style={{ minHeight: '435px' }}>
    <h1>Não encontrou o que procurava ?</h1>
    <span className="mt-2 text-grey-darker">Aqui você pode nos contar sobre algum ingrediente faltando pra dar aquele toque especial na sua pizza.</span>
    <form className="flex flex-col items-center mt-10 w-full" onSubmit={(e) => e.preventDefault()}>
      <input
        className="p-2 outline-none border-2 focus:border-grey-darkest rounded"
        style={{ width: '80%', maxWidth: '350px' }}
        placeholder="Digite seu melhor e-mail"
        type="email"
        required
      />
      <textarea
        className="mt-5 outline-none border-2 focus:border-grey-darkest rounded"
        style={{ width: '80%', maxWidth: '350px', minHeight: '150px', resize: 'none' }}
        placeholder="O que faltou ?"
        type="text"
        required
      />
      <input
        className={buttonStyle + "mt-5"}
        type="submit"
        value="Enviar solicitação"
      />
    </form>
  </footer>
);

export default Footer;