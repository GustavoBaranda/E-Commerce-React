import React from 'react';
import './Item.css';
function Item({ 
    nombre,
    precio,
    imagen}){
    
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
                </div>
            </div>
        </>
    )
}
export default Item;