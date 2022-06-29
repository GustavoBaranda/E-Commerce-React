import {useState} from "react";
import './ItemCount.css';

function ItemCount ( { stock, id } ){
    const [num, setNum] = useState( 1 );

    const sumar = () => {
        if( num < stock ){
            setNum( num + 1 );
        }
    }

    const resta = () => {
        if( num > 0 ){
            setNum( num - 1 );
        }
    }
    
    return (
        <>
            <div className="contadorContenedor">
            <div className="stock-disponibles">
                    <p>{ stock > 1 ? `${ stock } unidades disponibles` : `${ stock } unidad disponible` }</p>
                </div>
                <div className="contador">
                    <button className="sumar" onClick={ sumar }>+</button>
                    <h3 className="stock">{ num }</h3>
                    <button className="resta" onClick={ resta }>-</button>
                </div>
                <div className="boton">                     
                    <button className="agregarAlCarrito" /*onClick={ id }*/>Agregar Menu</button>
                </div>
            </div>    
        </>
    )
}

export default ItemCount;