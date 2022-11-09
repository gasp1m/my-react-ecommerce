import React from 'react'
import Item from '../Item/item'
import './itemList.css'

export const itemList = ({data = []}) => {
  return (
    data.map(cafe => <Item key={cafe.id} info={cafe}/>)
  )
}

export default itemList;
