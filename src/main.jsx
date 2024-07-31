import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
)
