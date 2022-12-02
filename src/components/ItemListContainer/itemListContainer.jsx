import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemCount from '../ItemCount/itemCount'
import ItemList from '../ItemList/itemList'
import './itemList.css'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({texto}) => {
  
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos')
    if(categoriaId){
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => console.log(res.docs.map(product => ({id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => console.log(res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
  }, [categoriaId])
  
  return (
    <>
    <Title greeting={texto}/>
    <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer;