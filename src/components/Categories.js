import React, { useState } from 'react'

export default function Categories(props) {
   
   let [categories, setCategories] = useState([
      {
         key: 'all',
         name: 'Все'
      },
      {
         key: 'big bag',
         name: 'Большие сумки'
      },
      {
         key: 'small bag',
         name: 'Маленькие сумки'
      }
   ])

   return (
      <div className='categories'>
         {categories.map(el => (
            <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
         ))}
      </div>
   )
}
