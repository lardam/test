import { Route, Routes, Link } from 'react-router-dom'

function Header(){
    return(
        <header id="header">
        <div id="title-container"><a href="index.html"><h1 id="brand-title">tienda</h1></a></div>
        <nav id="nav-bar">
            <NavList />
        </nav>
        <div id="nav-right-container">
        <i className="fa-regular fa-circle-user"></i>
        <i className="fa-solid fa-basket-shopping"><div id="cart-items"><p id="cart-item-number">0</p></div></i>
        </div>
    </header>
    )
}

let navlinks = ['Tienda', 'Modelos', 'Contacto', 'FAQ']

const NavList = () => <ul id="nav-list">{NavItems}</ul>

const NavItems = navlinks.map((link) =>
    <li className="nav-item" key={link}>{link}</li>
)

export default Header