import React from 'react'
import { useCartContext } from '../CartContext/cartContext'
import './itemCart.css'

const ItemCart = ({product}) => {

const {eliminarProducto} = useCartContext();

  return (
    <div className="itemCart">
        <img src={product.image} alt={product.nombre} />
        <div>
            <p>Producto: {product.nombre}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio u.: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;
