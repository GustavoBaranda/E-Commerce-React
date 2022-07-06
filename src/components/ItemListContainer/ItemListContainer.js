import './ItemListContainer.css';
import Itemlist from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import {data} from '../data/Data'
import {useParams} from 'react-router-dom'

function ItemListContainer ({ greetings }) {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true)
  
  const {idCategoria} = useParams();
 
    useEffect(() =>{
      setLoading(true);
      const getItems = new Promise((resolve) => {

        setTimeout(() =>{
          const mydata = idCategoria? data.filter((item) => item.categoria === idCategoria) : data;
         resolve(mydata);
      }, 500);
    });

    getItems.then((res) => {
      setItems(res);
    })
    .finally(() => setLoading(false));
  }, [idCategoria]);

  return loading ? (
    <div className="cargando">
          <h1>Cargando...</h1>
    </div>      
    ) : (

    <div className="ItemListContainer">
      <h1 className="titulo">{ greetings }</h1>
      <br />
      <Itemlist items={items} />
    </div>
  );
};

export default ItemListContainer; 


