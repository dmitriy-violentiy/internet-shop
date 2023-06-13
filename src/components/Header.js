import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {

   let [cartOpen, setCartOpen] = useState(false)

   return (
      <header>
         <div>
            <span className='logo'>House Staff</span>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
               <div className='shop-cart'></div>
            )}
            <ul className='nav'>
               <li>Про нас</li>
               <li>Контакты</li>
               <li>Кабинет</li>
            </ul>
         </div>
         <div className='presentation'></div>
      </header>
   )
}
