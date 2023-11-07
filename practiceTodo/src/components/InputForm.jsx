/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'


const InputForm = ({ item, handleChange, handleSubmit, items, setItems }) => {

  const clearList = () => {
    setItems({
      itemlist: [],
    })
  }

  return (
    <div>
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Add Items'
            value={item}
            onChange={handleChange} />
          <button type='submit'>Add It</button>
        </div>
      </form>
      {
        items.map(item => {
          return (
            <ItemList key={item.id} title={item.title} />
          )
        })
      }
      <button onClick={clearList}>Clear All</button>
    </div>
  )
}

export default InputForm