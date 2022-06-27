import {useState} from "react";
import Swal from 'sweetalert2';
import './ItemCount.css';
import img from './mcNifica.png';


function ItemCount ({stock}){
    const [num, setNum] = useState(0);

    const sumar = () => {
        if(num< stock){
            setNum(num+1);
        }
        else{
            Swal.fire(`El stock es de ${stock} unidades!`)
        }
    }

    const resta = () => {
        if(num>0){
            setNum(num-1);
        }
    }

    const reiniciar = () => {
        setNum(0)
    }

    const agregar = () => {
        console.log(num)
    }

    return (
        <>
            <div className="contadorContainer">
                <div className="cardContador">
                    <div className="img">
                        <img src={img} />
                    </div>
                    <div className="combo">
                        <h1>Combo cuarto de libra </h1>
                    </div>
                    <div className="contador">
                        <button className="sumar" onClick={sumar}>+</button>
                        <h3 className="stock">{num}</h3>
                        <button className="resta" onClick={resta}>-</button>
                    </div>
                    <div className="stock-disponibles">
                        <p>{stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
                    </div>
                    <div className="botones">                     
                        <button className="reiniciar" onClick={reiniciar}>Reiniciar</button>
                        <button className="agregarAlCarrito" onClick={agregar}>Agregar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount;