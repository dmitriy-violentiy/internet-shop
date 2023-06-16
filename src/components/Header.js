import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { Link } from 'react-router-dom';

const showOrders = (props) => {
   let summa = 0;
   props.orders.forEach(el => summa += Number.parseFloat(el.price))
   return (
      <div>
         {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
         ))}
         <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}р.</p>
      </div>
   )
} 

const showNothing = () => {
   return (
      <div className='empty'>
         <h2>Корзина пуста</h2>
      </div>
   )
}

export default function Header(props) {

   return (
      <header>
         <div className='header-wrap' onClick={(e) => {e.stopPropagation()}}>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
               <Link to="/">Главная</Link>
               <Link to="../pages/About">Про нас</Link>
               <Link to="../pages/Contacts">Контакты</Link>
            </ul>
            <FaShoppingCart onClick={() => props.setCartOpen(!props.cartOpen)} className={`shop-cart-button ${props.cartOpen && 'active'}`} />
            {props.cartOpen && (
               <div className='shop-cart'>
                  {props.orders.length > 0 ? 
                     showOrders(props) : showNothing()
                  }
               </div>
            )}
         </div>
         <div className='presentation'></div>
      </header>
   )
}
