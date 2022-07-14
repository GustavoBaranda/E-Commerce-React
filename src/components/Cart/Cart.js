import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import {useCartContext} from '../../context/Cartcontext'
import ItemCart from '../ItemCart/ItemCart';
function Cart(){

    const { cart, totalPrice, clearCart } = useCartContext();
    
    if( cart.length === 0 ) {
        return(
            <div className="cartVacio">
                <div className="mensajeCartVacio">
                    <p className="titulo">No hay elementos en el carrito</p>
                    <Link to={'/'}><p className="titulo">Ir a la carta</p></Link>
                </div>
            </div>
        )
    }

    return (
        <>
           {
            cart.map(menu => <ItemCart key={menu.id} menu={menu} />)
           }
           <div className="cartContenedor">
                <div className="cartTotal">
                    <p>
                            Total : $ {totalPrice()}
                    </p>
                    <div className="total">
                        <div className="finalDeCompra">
                            <button className="vaciarCarrito" onClick={ clearCart  }>Vaciar carrito</button>
                            <Link className="SeguirComprando" to="/">Seguir comprando</Link>
                            <Link className="finalizarCompra" to="/FinalizarCompra">Finalizar compra</Link>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Cart;