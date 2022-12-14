import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Cart from './components/Cart/cart';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/CartContext/cartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <CartProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
