import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'


function ItemDetail({id, imagen, nombre, descripcion, precio, stock}){
    
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
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
                        <ItemCount initial={ 1 } stock={ stock } onAdd={ onAdd } />
                    </div>
                </div>
            </div>
         
        </>
    );
};

export default ItemDetail;