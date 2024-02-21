import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { MultiplesCustomHooks } from './03-examples'
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  </BrowserRouter>
)
