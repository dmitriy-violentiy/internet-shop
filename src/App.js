import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

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
         ]
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this) //чтобы можно было работать с состояниями
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
   }
   render() {
      return (
         <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Categories chooseCategory={this.chooseCategory}/>
            <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
            <Footer/>
         </div>      
      );
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

export default App;
