import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Categories from "../components/Categories";
import ShowFullItem from "../components/ShowFullItem";

export default function Main() {

   let [cartOpen, setCartOpen] = useState(false)
   let [orders, setOrders] = useState([])
   let [currentItems, setCurrentItems] = useState([])
   let [items, setItems] = useState(
      [
         {
            id: 1,
            title: 'Сумка 1',
            img: 'product1.jpg',
            desc: 'Описание сумки 1',
            category: 'small bag',
            price: '23'
         },
         {
            id: 2,
            title: 'Сумка 2',
            img: 'product2.jpg',
            desc: 'Описание сумки 2',
            category: 'small bag',
            price: '11'
         },
         {
            id: 3,
            title: 'Сумка 3',
            img: 'product3.jpg',
            desc: 'Описание сумки 3',
            category: 'big bag',
            price: '23'
         },
         {
            id: 4,
            title: 'Сумка 4',
            img: 'product4.jpg',
            desc: 'Описание сумки 4',
            category: 'small bag',
            price: '22'
         },
         {
            id: 5,
            title: 'Сумка 5',
            img: 'product5.jpg',
            desc: 'Описание сумки 5',
            category: 'big bag',
            price: '50'
         },
         {
            id: 6,
            title: 'Сумка 6',
            img: 'product5.jpg',
            desc: 'Описание сумки 6',
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
      setfullItem(item)
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
      <div className="wrapper" onClick={() => setCartOpen(false)}>
            <Header orders={orders} onDelete={deleteOrder} cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <Categories chooseCategory={chooseCategory}/>
            <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>

            {showFullItem && 
               <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />
            }
            <Footer/>
      </div> 
   )

}
