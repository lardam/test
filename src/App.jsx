import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './styles.css'
import Content from './Content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Content />
    <Footer />
  </BrowserRouter>
)