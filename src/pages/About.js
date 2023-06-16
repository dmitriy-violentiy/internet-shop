import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
   return (
      <div className='wrapper'>
         <Header/>
         <div className='contacts'>
            <h3>На рынке более 7 лет. Около 7000 довольных клиентов!</h3>
         </div>
         <Footer/>
      </div>
   )
}
