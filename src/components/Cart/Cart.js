import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import {useCartContext} from '../../context/Cartcontext'
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';
function Cart(){
    const { cart, totalPrice, clearCart } = useCartContext();
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [orderId, setOrderId] = useState(null);

    const nombreCliente = (event) => {
        const value = event.target.value;
        setNombre(value);
      };
      const emailCliente = (event) => {
        const value = event.target.value;
        setEmail(value);
      };
      const domicilioCliente = (event) => {
        const value = event.target.value;
        setDomicilio(value);
      };
      const telefonoCliente = (event) => {
        const value = event.target.value;
        setTelefono(value);
      };
const addOrder = () => {
    const userInfo = { nombre, email, domicilio, telefono };

    const order = {
        userInfo,
        items: cart.map((product) => ({
            id: product.id,
            title: product.nombre,
            price: product.precio,
            quantity: product.quantity,
        })),
        total: totalPrice(),
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    
};

console.log('esta es tu orden es', orderId);
    const compraExitosa = () => {
    Swal.fire({
        title: 'Tu orden de compra es:',
        text:`${orderId}`
    });
}


   
    const handleClick = () => {
        addOrder();
        clearCart();
        compraExitosa();
    }
    
    
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
            <div>            
                {
                    cart.map(menu => <ItemCart key={menu.id} menu={menu} />)
                }
           </div>
           <div className="cartContenedor">
                <div className="centrar">
                <div className="form">
                        <label className="label">Nombre Completo</label>
                        <br/>
                        <input 
                            type="text"
                            placeholder='Nombre Completo'
                            value={nombre}
                            onChange={nombreCliente}
                        ></input>
                        <br/>
                        <label>Correo Electronico</label>
                        <br/>
                        <input
                            type="email"
                            placeholder='mail@ejemplo.com'
                            value={email}
                            onChange={emailCliente}
                        ></input>
                        <br/>
                        <label>Domilicio</label>
                        <br/>
                        <input
                            type="text"
                            placeholder='Domilicio'
                            value={domicilio}
                            onChange={domicilioCliente}
                        ></input>
                        <br/>
                        <label>Telefono</label>
                        <br/>
                        <input
                            min="0"
                            type="number"
                            placeholder='Telefono'
                            value={telefono}
                            onChange={telefonoCliente}
                        ></input>
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
                            <button className="finalizarCompra" 
                            disabled={
                            !nombre ||
                            !telefono ||
                            !email || 
                            !domicilio}
                            onClick={handleClick}>Finalizar compra</button>
                        </div>
                    </div>
                    
                </div>
           </div>
        </>
    )
}
export default Cart;