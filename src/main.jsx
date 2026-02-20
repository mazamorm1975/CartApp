import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CartApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
