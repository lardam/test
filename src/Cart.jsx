import { useState } from "react"
import { CartItems } from "./Store"

function Cart(){
    return(
        <div>
            {Text}
        </div>
    )
}

const [items, setItems] = useState(CartItems)

const Text = items.map((i) => <p key={i.id + ' ' + i.length}>{i.item}</p>)

export default Cart

//https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g

//dale con state