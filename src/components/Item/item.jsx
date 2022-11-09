import React from 'react'

export const Item = ({info}) => {
  return (
    <a href="" className='cafe'>
        <img src={info.image} alt="" />
        <p>{info.nombre}</p>
    </a>
  )
}

export default Item;
