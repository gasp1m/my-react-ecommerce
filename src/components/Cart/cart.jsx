import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/cartContext';
import ItemCart from '../ItemCart/itemCart';
import './cart.css';

const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: 'Gaspar',
      email: 'gasparmmaraschio@gmail.com',
      phone: '123123',
      address: 'Chacabuco'
    },
    items: cart.map(product => ({id: product.id, title: product.nombre, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {

  }

  if(cart.length === 0){
    return (
      <>
        <p>No hay productos en el carrito.</p>
        <Link to='/'>Ir a comprar</Link>
      </>
    )
  }

  return (
    <>
        {
          cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p className='totalDeCompra'>Total: ${totalPrice()}</p>
        <button>Confirmar orden</button>
    </>
  )
}


export default Cart;
