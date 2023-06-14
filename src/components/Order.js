import React from 'react'

export default function Order(props) {
   return (
      <div className='item'>
      <img src={'./img/' + props.item.img} />
      <h2>{props.item.title}</h2>
      <b>{props.item.price}р.</b>
   </div>
   )
}

