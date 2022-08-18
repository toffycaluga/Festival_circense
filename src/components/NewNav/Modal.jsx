import React from 'react'

import './modal.css'

function Modal() {
  return (
    <div>

   <header id="header">
     <a href="#modal" className='cta'>MENU</a>
   </header>
   <section id="modal" className="modal">
        <div className="modal__container">
            <figure className="modal__picture">
              <a href="/">
                <img src="./img/logo_festival.png" alt="festival de chile" className="modal__img"/>
              </a>
            </figure>
       
        <ul>
            <li><a href="mausoleo">mausoleo</a></li>
            <li><a href="sindicato">sindicato</a></li>
            <li><a href="dia-del-circo">dia del circo</a></li>
            <li><a href="patrimonio">circo patimonio en chile</a></li>
            <li><a href="circo-en-pandemia">circo en pandemia</a></li>
            <li><a href="campeonato-circense">campeonato circense</a></li>
        </ul>
        <a href="#header" className="modal__close">X</a>
        </div>

   </section>
    </div>
  )
}

export default Modal