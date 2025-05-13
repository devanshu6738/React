import React, { useState } from 'react'
import { Mymodal } from './Mymodal';

function Modal() {
    const[showmodal,Setshowmodal]=useState(false);
    const CloseModal=()=> Setshowmodal(false)
  return (
    <div>
      <button onClick={()=> Setshowmodal(true)} className='border p-2'>Open Modal</button>
      {showmodal && <Mymodal CloseModal={CloseModal}/>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas iste quis explicabo quod, odio inventore ducimus facere dignissimos atque harum odit natus ipsa! Aliquid maxime facilis cupiditate quam nam!
      </p>
    </div>
  )
}

export default Modal
