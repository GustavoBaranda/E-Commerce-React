import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'
function Item({nombre, precio, imagen, id}){
    
    return (
        <>
            <Link to={`/item/${id}`}>
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
            </Link>
        </>
    )
}
export default Item;