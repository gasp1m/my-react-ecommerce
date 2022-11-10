import React, {useState} from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount/itemCount'
import { Link } from 'react-router-dom';
import useCartContext from '../CartContext/cartContext';


export const ItemDetail = ({data}) => {
  
  const [goToCart, setGoToCart] = useState(false);

  const {addProduct} = useCartContext();
  
  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity);
  }

  return (
    <div className="container">
        <div className="detail">
            <img className="detail-image" src={data.image} alt="" />
            <div className="content">
                <h1>{data.nombre}</h1>
                <p>{data.ingredientes}</p>
                {
                  goToCart 
                    ? <Link to='/cart'>Finalizar compra</Link>
                    :<ItemCount initial={1} stock={8} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;
