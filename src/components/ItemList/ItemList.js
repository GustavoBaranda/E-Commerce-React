import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function  ItemsList({ items }) {
     return(
        <>
            <div className="container">
                {items?.map((item)=> (
                <Item {...item} key={item.id} />  
                ))}
            </div>
            
        </>
    )
}

export default ItemsList;