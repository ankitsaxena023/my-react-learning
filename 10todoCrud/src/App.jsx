import { TodoProvider } from './context/index'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todoArrItem, setTodoArrItem] = useState([]);

  const addTodo = (todo) => {
    setTodoArrItem((prev) => [...prev, { id: Date.now(), ...todo }])
  }
  console.log("arrItems", todoArrItem)

  const updateTodo = (id, todo) => { setTodoArrItem((prev) => prev.map((prevItem) => prevItem.id === id ? todo : prevItem)) }

  const deleteTodo = (id) => {
    setTodoArrItem((prev) => prev.filter((currItem) => currItem.id !== id))
  }

  const toggleComplete = (id) => {
    setTodoArrItem((prev) => prev.map((currItem) => currItem.id === id ? { ...currItem, completed: !currItem.completed } : currItem))
  }

  useEffect(() => {
    const todoArrItem = JSON.parse(localStorage.getItem("todos"))
    if (todoArrItem && todoArrItem.length > 0) {
      setTodoArrItem(todoArrItem);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArrItem))
  }, [todoArrItem])



  return (
    <TodoProvider value={{ todoArrItem, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todoArrItem.map((todoItem) => (
              <div key={todoItem.id} className='w-full'>
                <TodoItem todo={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
