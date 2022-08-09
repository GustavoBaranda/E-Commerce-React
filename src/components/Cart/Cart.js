import React from 'react';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../context/Cartcontext'
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

function Cart(){
    const { cart, totalPrice, clearCart } = useCartContext();
        
  
    return (

            <>  
                { cart.length === 0 ? ( 
                
                <div className="cartVacio">
                    <div className="mensajeCartVacio">
                        <p className="mensajeCarritoVacio">No hay ningun pedido en el carrito</p>
                        <Link to={'/'}><p className="carta">Ir a la carta</p></Link>
                    </div>
                </div>
                ) : (
                <div className="cartContenedor">    
                    <div className="carrito">            
                        {
                            cart.map(menu => <ItemCart key={menu.id} menu={menu} />)
                        }
                    </div>
                    <div>
                        <p className="cartTotal">
                            Total : $ {totalPrice()}
                        </p>
                    </div>
                    <div className="total">
                        <div className="finalDeCompra">
                            <button className="vaciarCarrito" onClick={ clearCart  }>Vaciar carrito</button>
                            <Link className="SeguirComprando" to="/">Seguir comprando</Link>
                            <Link className="finalizarCompra" to="/Form">Realizar Compra</Link>
                         </div>
                    </div>
                </div>    
                )
                }
            </>
   )
}
export default Cart;