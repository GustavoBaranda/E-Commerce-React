import './ItemListContainer.css';
import Itemslist from './ItemsList';
import React, { useEffect, useState } from 'react';
import {cartaMenus} from '../components/cartaMenus'

function ItemListContainer({ greetings }) {

  const [menus, setMenus] = useState([])

  const getMenus = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cartaMenus.length > 0 ?
          resolve(cartaMenus)
          :
          reject("No hay datos")
      }, 2000);
    }
    )
  }

  useEffect(() => {
  getMenus()
      .then(res => setMenus(res))
      .catch(err => console.log(err))
  }, [menus])

  console.log(menus)

  

  return (
    <div className="ItemListContainer">
      <h1 className="titulo">{ greetings }</h1>
      <br />
      <Itemslist cartaMenus={menus} />
    </div>
  );
}

export default ItemListContainer;
