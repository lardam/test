import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import './styles.css'
import Content from './Content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>
)