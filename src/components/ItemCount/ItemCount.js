import { useState } from 'react';
import './ItemCount.css';

function ItemCount ( {initial, stock, onAdd } ){
    const [num, setNum] = useState( initial );

    const sumar = () => {
        if(stock > 0 && stock !== NaN ){
      setNum( num + 1 );
    }
    }

    const resta = () => {
        if(num >= 1){
        setNum( num - 1 );
    }
    }
    
    return (
        <>
            <div className="contadorContenedor">
                <div className="stockDisponible">
                    <p>{ stock > 1 ? `${ stock } unidades disponibles` : stock === 1 ?`${ stock } unidad disponible` : `Sin Stock` }</p>
                </div>
                <div className="contador">
                    <button className="sumar" disabled={ stock === num } onClick={ sumar }>+</button>
                    <h3 className="stock">{ num }</h3>
                    <button className="resta"  onClick={ resta }>-</button>
                </div>
                <div className="boton">                     
                    <button className="agregarAlCarrito" disabled={ num <= 0 }onClick={() => onAdd(num) }>Agregar Menu</button>
                </div>
            </div>    
        </>
    )
}

export default ItemCount;