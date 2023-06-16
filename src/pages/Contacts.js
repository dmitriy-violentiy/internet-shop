import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contacts() {
   return (
      <div className='wrapper'>
         <Header/>
         <div className='contacts'>
            <h3>Наши контакты</h3>
            <address>
               <p>Автор: <a href="mailto:violentiy1997@mail.ru">Виолентий Дмитрий</a></p>
               <p>г. Сочи</p>
               <p><a href="tel:+79384487937">+7 (938) 448-79-37</a></p>
            </address>
         </div>
         <Footer/>
      </div>
   )
}
