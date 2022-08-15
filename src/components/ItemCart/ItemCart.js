import React from 'react';
import {useCartContext} from '../../context/Cartcontext'
import './ItemCart.css'
//import delete from '../../assets/delete.png';

const ItemCart = ({menu}) => {

    const {removeItem} = useCartContext();

    return (
        <div className="itenCartContenedor">
            <div className="cartItem">
                <div className="menuCart">
                    <img src={ menu.imagen } alt={ menu.nombre} style={{width: '100%'}} />
                </div>
                <div className="menuDescripcion">
                    <p>Menu:</p>
                    <p>Cantidad:</p>
                    <p>Precio:</p>
                    <p>Subtotal:</p>
                </div>
                <div className="menuItem">
                    <p>{menu.nombre}</p>
                    <p>{menu.quantity}</p>
                    <p>$ {menu.precio}</p>
                    <p> $ {menu.quantity * menu.precio}</p>
                </div>
                <div className="delete"> 
                    <img onClick={() => removeItem(menu.id)}src={ require (`../../assets/delete.png`) } alt="delete" />
                </div>
            </div>
        </div>
    )
}

export default ItemCart;