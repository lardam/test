import inventory from './inventory';

function Store() {
  return (
    <div id="store-container">
      <div id="products-container">
        {Card}
      </div>
    </div>
  )
}

const Card = inventory.map((card) => 
<div className='card' key={card.id} id={card.item + '-' + card.id} >
    <img className='card-img' style={{backgroundColor: card.color}}/>
    <p className='card-item'>{card.item}</p>
    <p className='card-price'>${card.price}</p>
    <button onClick={(e) => addToCart(card)} className='card-add-to-cart'>Agregar al carrito</button>
  </div>
)

function addToCart(item){
  CartItems.push(item)
  document.getElementById('cart-item-number').textContent = CartItems.length
}
export const CartItems = []
export default Store