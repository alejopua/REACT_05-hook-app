import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { MultiplesCustomHooks } from './03-examples'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MultiplesCustomHooks />
    </React.StrictMode>
  </BrowserRouter>
)
