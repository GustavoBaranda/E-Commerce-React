import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  { useCartContext } from '../../context/Cartcontext';
function ItemDetail( { imagen, nombre, descripcion, precio, stock, id } ) {
    
    const [ goToCart, setGoToCart ] = useState( false );

    const {addItem} = useCartContext();

    const onAdd = ( quantity ) => {
        //console.log(`Compraste ${cantidad} ${nombre}`);
        setGoToCart( true );
        addItem( { id, nombre, precio, imagen,  stock }, quantity );
    }
    return (
        <>
            <div className="ContainerDetail">
                <div className="ItemDetail">
                    <div className="imgDiv">
                        <img src={ imagen } alt={ nombre } />
                    </div>
                    <div className="combo">
                        <h3>{ nombre }</h3>
                    </div>
                    <div className="descripcion">
                        <p>{ descripcion }</p> 
                    </div>
                    <div className="precioDetail">
                        <p>$ { precio }</p>
                    </div>
                    <div className="contadorDetail">
                        {
                            goToCart? 
                            <div className="bottons">
                                <button type="button" className="irAlCarrito">
                                    <Link className="irAlCarritoLink" to="/Cart">Ir al carrito</Link>
                                </button>
                                <button type="button" className="seguirComprandoDetail">
                                    <Link className="seguirComprandoDetailLink" to="/">Seguir Comprando</Link>
                                </button>
                            </div>
                            : 
                            <ItemCount initial={0} stock={stock} onAdd={onAdd} />
                            
                        }
                    </div>
                </div>
            </div>
         
        </>
    );
};

export default ItemDetail;