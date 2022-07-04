import './ItemListContainer.css';
import Itemlist from './ItemList';
import React, { useEffect, useState } from 'react';
import {data} from './data/Data'

function ItemListContainer ({ greetings }) {

  const [items, setItems] = useState([]);

    useEffect(() =>{
      const getItems = new Promise((resolve) => {

        setTimeout(() =>{
         resolve(data);
      }, 1000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div className="ItemListContainer">
      <h1 className="titulo">{ greetings }</h1>
      <br />
      <Itemlist items={items} />
    </div>
  );
};

export default ItemListContainer; 


