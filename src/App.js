import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         items: [
            {
               id: 1,
               title: 'Сумка 1',
               img: 'product1.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '23'
            },
            {
               id: 2,
               title: 'Сумка 2',
               img: 'product2.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '11'
            },
            {
               id: 3,
               title: 'Сумка 3',
               img: 'product3.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '23'
            },
            {
               id: 4,
               title: 'Сумка 4',
               img: 'product4.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '22'
            },
            {
               id: 5,
               title: 'Сумка 5',
               img: 'product5.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '50'
            },
            {
               id: 6,
               title: 'Сумка 6',
               img: 'product5.jpg',
               desc: 'Text desc',
               category: 'chairs',
               price: '50'
            }
         ]
      }
   }
   render() {
      return (
         <div className="wrapper">
            <Header/>
            <Items items={this.state.items}/>
            <Footer/>
         </div>      
      );
   }
}

export default App;
