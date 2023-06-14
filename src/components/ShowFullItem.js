import React, { Component } from 'react'

export class ShowFullItem extends Component {
   render() {
      return (
         <div className='full-item'>
            <div>
               <span className='close-cart' onClick={() => this.props.onShowItem(this.props.item)}>X</span>
               <img src={'./img/' + this.props.item.img} />
               <h2>{this.props.item.title}</h2>
               <p>{this.props.item.desc}</p>
               <b>{this.props.item.price}р.</b>
               <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
         </div>
      )
   }
}

export default ShowFullItem