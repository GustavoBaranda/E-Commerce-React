import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function ItemDetail({imagen, nombre, descripcion, precio, stock}){
    
    const [irAlCart, setIrAlCart] = useState(false)

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} ${nombre}`)
        setIrAlCart(true)
    }

    return (
        <>
            <div className="ContainerDetail">
                <div className="ItemDetail">
                    <div className="imgDiv">
                        <img src={ imagen } alt={ nombre } />
                    </div>
                    <div className="combo">
                        <h1>{ nombre }</h1>
                    </div>
                    <div className="descripcion">
                        <p>{ descripcion }</p> 
                    </div>
                    <div>
                        <p className="precioDetail">$ { precio }</p>
                    </div>
                    <div className="contadorDetail">
                        {
                            irAlCart
                            ? <Link className="terminarCompra" to="/Cart">Terminar Compra</Link>
                            : <ItemCount initial={ 1 } stock={ stock } onAdd={ onAdd } />
                        }
                    </div>
                </div>
            </div>
         
        </>
    );
};

export default ItemDetail;