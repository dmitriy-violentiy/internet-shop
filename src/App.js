/* import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         orders: [],
         currentItems: [],
         items: [
            {
               id: 1,
               title: 'Сумка 1',
               img: 'product1.jpg',
               desc: 'Text desc',
               category: 'small bag',
               price: '23'
            },
            {
               id: 2,
               title: 'Сумка 2',
               img: 'product2.jpg',
               desc: 'Text desc',
               category: 'small bag',
               price: '11'
            },
            {
               id: 3,
               title: 'Сумка 3',
               img: 'product3.jpg',
               desc: 'Text desc',
               category: 'big bag',
               price: '23'
            },
            {
               id: 4,
               title: 'Сумка 4',
               img: 'product4.jpg',
               desc: 'Text desc',
               category: 'small bag',
               price: '22'
            },
            {
               id: 5,
               title: 'Сумка 5',
               img: 'product5.jpg',
               desc: 'Text desc',
               category: 'big bag',
               price: '50'
            },
            {
               id: 6,
               title: 'Сумка 6',
               img: 'product5.jpg',
               desc: 'Text desc',
               category: 'big bag',
               price: '50'
            }
         ],
         showFullItem: false,
         fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)       //чтобы можно было работать с состояниями
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
   }
   render() {
      return (
         <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Categories chooseCategory={this.chooseCategory}/>
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

            {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
            <Footer/>
         </div>      
      );
   }

   onShowItem (item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
   }

   chooseCategory(category) {
      if(category == 'all') {
         this.setState({currentItems: this.state.items})  
         return
      }

      this.setState({
         currentItems: this.state.items.filter(el => el.category === category)
      })
   }

   deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
   }

   addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {
         if(el.id === item.id) {
            isInArray = true
         }
      });
      if(!isInArray) {
         this.setState({orders: [...this.state.orders, item]})
      }
   }
}

export default App; */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App(props) {

   let [orders, setOrders] = useState([])
   let [currentItems, setCurrentItems] = useState([])
   let [items, setItems] = useState(
      [
         {
            id: 1,
            title: 'Сумка 1',
            img: 'product1.jpg',
            desc: 'Text desc',
            category: 'small bag',
            price: '23'
         },
         {
            id: 2,
            title: 'Сумка 2',
            img: 'product2.jpg',
            desc: 'Text desc',
            category: 'small bag',
            price: '11'
         },
         {
            id: 3,
            title: 'Сумка 3',
            img: 'product3.jpg',
            desc: 'Text desc',
            category: 'big bag',
            price: '23'
         },
         {
            id: 4,
            title: 'Сумка 4',
            img: 'product4.jpg',
            desc: 'Text desc',
            category: 'small bag',
            price: '22'
         },
         {
            id: 5,
            title: 'Сумка 5',
            img: 'product5.jpg',
            desc: 'Text desc',
            category: 'big bag',
            price: '50'
         },
         {
            id: 6,
            title: 'Сумка 6',
            img: 'product5.jpg',
            desc: 'Text desc',
            category: 'big bag',
            price: '50'
         }
      ]
   )
   let [showFullItem, setShowFullItem] = useState(false)
   let [fullItem, setfullItem] = useState({})

   useEffect(() => {
      setCurrentItems(items)
   }, [])

   let onShowItem = (item) => {
      setShowFullItem(item)
      setShowFullItem(!showFullItem)
   }

   let chooseCategory = (category) => {
      if(category == 'all') {
         setCurrentItems(items)  
         return
      }

      setCurrentItems(items.filter(el => el.category === category))
   }

   let deleteOrder = (id) => {
      setOrders(orders.filter(el => el.id !== id))
   }

   let addToOrder = (item) => {
      let isInArray = false
      orders.forEach(el => {
         if(el.id === item.id) {
            isInArray = true
         }
      });
      if(!isInArray) {
         setOrders([...orders, item])
      }
   }

   return (
      <div className="wrapper">
         <Header orders={orders} onDelete={deleteOrder}/>
         <Categories chooseCategory={chooseCategory}/>
         <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>

         {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem}/>}
         <Footer/>
      </div>  
   )

}

