import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/itemCount'
import ItemList from '../ItemList/itemList'
import './itemList.css'
import { useParams } from 'react-router-dom'


const productos = [
  {
    id: 1,
    nombre: 'Cappuchino',
    image: 'https://vips.com.mx/menu/imgpreview/platos/capuchino.jpg',
    category: 'cafes'
  },
  {
    id: 2,
    nombre: 'Latte',
    image: 'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg',
    category: 'cafes'
  },
  {
    id: 3,
    nombre: 'Mocha',
    image: 'https://www.caffesociety.co.uk/assets/recipe-images/mocha-small.jpg',
    category: 'cafes'
  },
  {
    id: 4,
    nombre: 'Cortado',
    image: 'https://atrs.com.ar/wp-content/uploads/2022/05/cafe-cortado-300x300.png',
    category: 'cafes'
  },
  {
    id: 5,
    nombre: 'Té verde',
    image: 'https://dietbox.es/wp-content/uploads/2017/04/T%C3%A9-verde2.jpg',
    category: 'tes'
  },
  {
    id: 6,
    nombre: 'Té negro',
    image: 'https://www.gastrolabweb.com/u/fotografias/m/2021/3/15/f608x342-10066_39789_0.jpg', 
    category: 'tes'
  },
  {
    id: 7,
    nombre: 'Té de manzanilla',
    image: 'https://img-global.cpcdn.com/recipes/e39925c90a54d782/400x400cq70/photo.jpg', 
    category: 'tes'
  },
  {
    id: 8,
    nombre: 'Té de menta',
    image: 'https://static.tuasaude.com/media/article/fp/ki/beneficios-del-te-de-menta_58750_l.jpg', 
    category: 'tes'
  },
  {
    id: 9,
    nombre: 'Té rojo',
    image: 'https://t1.uc.ltmcdn.com/es/posts/2/0/3/cuales_son_los_beneficios_del_te_rojo_23302_orig.jpg', 
    category: 'tes'
  },
  {
    id: 10,
    nombre: 'Té Chai',
    image: 'https://i.pinimg.com/736x/b7/7e/cf/b77ecf2b1c93892911487d8eb7406ea4.jpg', 
    category: 'tes'
  },
];


export const ItemListContainer = ({texto}) => {
  
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 1000)
    });

    if(categoriaId){
      getData.then(res => setData(res.filter(prod => prod.category === categoriaId)));
    } else {
      getData.then(res => setData(res))
    }
  }, [categoriaId])
  
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)
  }
  
  return (
    <>
    <Title greeting={texto}/>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer;