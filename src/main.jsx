import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { MultiplesCustomHooksVersion2 } from './03-examples/MultiplesCustomHooksVersion2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MultiplesCustomHooksVersion2 />
    </React.StrictMode>
  </BrowserRouter>
)
