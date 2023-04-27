import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { SuculentasApp } from './suculentasApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuculentasApp />
    </BrowserRouter>
  </React.StrictMode>,
)
