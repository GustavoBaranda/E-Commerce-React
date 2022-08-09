import React, { useContext, createContext } from 'react';
import { useLocalStorage } from '../components/LocalStorage/useLocalStorage'

const CartContext = createContext( [] );

export const useCartContext = () => useContext( CartContext );

const CartProvider = ( { children } ) => {

    const [ cart, setCart] = useLocalStorage('Carrito', [] );
    
    const addItem = ( item, quantity ) => {
        if( isInCart( item.id ) ){
            setCart( cart.map( menu => {
            return menu.id === item.id ? { ...menu, quantity: menu.quantity + quantity } : menu 
        } )); 
    } else {
        setCart( [...cart, { ...item, quantity: quantity } ] )
    }
  };



    const clearCart = () => setCart( [] );
    
    const isInCart = ( id ) => cart.some( menu => menu.id === id );
    
    const removeItem = ( id ) => setCart( cart.filter( menu => menu.id !== id ) );

    const totalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.precio, 0 );

    const totalMenus = () => cart.reduce((acumulador, menuActual) => acumulador + menuActual.quantity, 0 );

    return (
        <CartContext.Provider value= { {
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalMenus,
            cart
        } }>
            { children }
        </CartContext.Provider>


    )
};

export default CartProvider;