import { Link } from 'react-router-dom'

function Header(){
    return(
        <header id="header">
        <div id="title-container"><Link to="/"><h1 id="brand-title">tienda</h1></Link></div>
        <nav id="nav-bar">
            <NavList />
        </nav>
        <div id="nav-right-container">
        <i className="fa-regular fa-circle-user"></i>
        <Link to='/Carrito'>
            <i className="fa-solid fa-basket-shopping"><div id="cart-items"><p id="cart-item-number">0</p></div></i>
        </Link>
        </div>
    </header>
    )
}

let navlinks = ['Tienda', 'Modelos', 'Contacto', 'FAQ']

const NavList = () => <ul id="nav-list">{NavItems}</ul>

const NavItems = navlinks.map((link) =>
    <li className="nav-item" key={link}><Link to={link}>{link}</Link></li>
)

export default Header