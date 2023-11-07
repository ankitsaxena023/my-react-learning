import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import { nanoid } from 'nanoid'


const App = () => {
  const [items, setItems] = useState({
    itemlist: [],
    id: nanoid(),
    item: "",
    editItem: false,
  });

  const handleChange = (e) => {
    setItems({ ...items, item: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: items.id,
      title: items.item,
    }
    console.log("updatedItem Array", newItem)

    const updatedItem = [...items.itemlist, newItem];

    setItems({
      itemlist: updatedItem,
      item: '',
      id: nanoid(),
      editItem: false,
    })

  }
  console.log("original array", items)

  return (
    <div>
      <InputForm item={items.item} handleChange={handleChange} handleSubmit={handleSubmit} items={items.itemlist} setItems={setItems} />
    </div>
  )
}

export default App