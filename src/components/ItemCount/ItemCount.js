import { useState } from "react";
import './ItemCount.css';

function ItemCount ( {initial, stock, onAdd } ){
    const [num, setNum] = useState( initial );

    const sumar = () => {
      setNum( num + 1 );
    }

    const resta = () => {
        setNum( num - 1 );
        
    }
    
    return (
        <>
            <div className="contadorContenedor">
                <div className="stockDisponible">
                    <p>{ stock > 1 ? `${ stock } unidades disponibles` : `${ stock } unidad disponible` }</p>
                </div>
                <div className="contador">
                    <button className="sumar" disabled={ num >= stock } onClick={ sumar }>+</button>
                    <h3 className="stock">{ num }</h3>
                    <button className="resta" disabled={ num <= 1 } onClick={ resta }>-</button>
                </div>
                <div className="boton">                     
                    <button className="agregarAlCarrito" disabled={ stock <= 0 } onClick={() => onAdd(num) }>Agregar Menu</button>
                </div>
            </div>    
        </>
    )
}

export default ItemCount;