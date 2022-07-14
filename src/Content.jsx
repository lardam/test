import { Route, Routes } from 'react-router-dom';
import Store from './Store';
import Models from './Models'
import Contact from './Contact'
import FAQ from './FAQ'
import Cart from './Cart';

function Content(){
    return (
        <Routes>
            <Route path='/' element={<Store/>}/>
            <Route path='Tienda' element={<Store/>}/>
            <Route path='Modelos' element={<Models/>}/>
            <Route path='Contacto' element={<Contact/>}/>
            <Route path='FAQ' element={<FAQ/>}/>
            <Route path='Carrito' element={<Cart/>}/>
        </Routes>
    )
}

export default Content