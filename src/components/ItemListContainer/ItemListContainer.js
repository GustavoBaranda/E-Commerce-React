import './ItemListContainer.css';
import Itemlist from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer ({ greetings }) {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true)
  
  const {idCategoria} = useParams();
 
    useEffect(() =>{
 
      setLoading(true)
 
      const querydb = getFirestore();

      const queryCollection = collection(querydb, 'data');

      if (idCategoria) {
        const queryFilter = query(queryCollection, where('categoria', '==', idCategoria));
      
        getDocs(queryFilter)
          .then(res => setItems(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
      
      } else {
      getDocs(queryCollection)
        .then(res => setItems(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
      } 
 
      setLoading(false)
      
  }, [idCategoria]);

  return (
    <>
      { 
        loading ? (
          <Spinner />     
        ) : (
        <div className="ItemListContainer">
          <h1 className="titulo">{ greetings }</h1>
          <br />
          <Itemlist items={items} />
        </div>
        )
      }
    </>
  );
};

export default ItemListContainer; 


