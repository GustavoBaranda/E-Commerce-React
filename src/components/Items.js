import React from 'react';
import './Items.css';
import ItemCount from './ItemCount'
function Items({nombre, imagen, precio, id, stock}){
    
    return (
        <>
            <div className="contadorContainer">
                <div className="cardContador">
                    <div className="img">
                        <img src={ imagen } alt={nombre} />
                    </div>
                    <div className="combo">
                        <p>{nombre }</p>
                    </div>
                    <div>
                        <p className="precio">$ { precio }</p>
                    </div>
                    <div>
                        <ItemCount stock={ stock } id={ id } />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Items;