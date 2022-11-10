import React, { useContext, useState } from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart)

    const addProduct = (item, quantity) => {
        if(enElCarrito(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product 
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }
    const limpiarCarrito = () => setCart([]);
    const enElCarrito = (id) => cart.find(product => product.id === id) ? true : false;
    const eliminarProducto = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        addProduct,
        limpiarCarrito,
        enElCarrito,
        eliminarProducto
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
