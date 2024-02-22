import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import { MultiplesCustomHooks } from './03-examples'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { HomePage } from './09-useContext/HomePage'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
