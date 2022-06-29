import React from 'react';
import Items from './Items'
import './ItemsList.css';

function  ItemsList({ cartaMenus }) {
    console.log('cartaMenus', cartaMenus)
    //nombre, imagen, precio, id, stock
    return(
        <>
            <div className="container">
                {cartaMenus.map((unMenu)=><Items nombre={unMenu.nombre} imagen={unMenu.imagen} precio={unMenu.precio} id={unMenu.id} stock={unMenu.stock} />  )}
            </div>
            
        </>
    )
}

export default ItemsList;