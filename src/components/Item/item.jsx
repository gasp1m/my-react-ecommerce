import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './item.css'
import { CartContext } from '../../App';

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className="prod">
        <img src={info.image} alt="" />
        <p>{info.nombre}</p>
    </Link>
  )
}

export default Item;
