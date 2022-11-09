import React,{ useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/itemDetail'

const cafe = {id: 6, nombre: 'Cappuchino', image: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg'}

export const ItemDetailContainer = () => {
  
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
            resolve(cafe)
          }, 2000)
        });
    
        getData.then(res => setData(res));
    }, [])
  
    return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;