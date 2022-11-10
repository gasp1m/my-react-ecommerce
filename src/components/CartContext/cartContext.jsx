import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart)

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if(product){
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = {...item, quantity: quantity};
            newCart = [...cart, product]
        }
        setCart(newCart);
    }
    const limpiarCarrito = () => setCart([]);
    const enElCarrito = (id) => cart.find(product => product.id === id) ? true : false;
    const eliminarProducto = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        limpiarCarrito,
        enElCarrito,
        eliminarProducto,
        addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
