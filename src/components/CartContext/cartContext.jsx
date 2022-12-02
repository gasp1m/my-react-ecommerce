import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart)

    const addProduct = (item, quantity) => {
        if(enElCarrito(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0) 
    };
    const totalProducts = () => {
        cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }
    const limpiarCarrito = () => setCart([]);
    const enElCarrito = (id) => cart.find(product => product.id === id) ? true : false;
    const eliminarProducto = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        limpiarCarrito,
        enElCarrito,
        eliminarProducto,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}
