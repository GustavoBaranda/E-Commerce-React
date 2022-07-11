import React, { useState, useContext, createContext } from 'react';

const CartContext = createContext( [] );

export const useCartContext = () => useContext( CartContext );

const CartProvider = ( { children } ) => {

    const [ cart, setCart] = useState( [] );
    
    const addItem = ( item, cantidad ) => {
        if( isInCart( item.id ) ){
            setCart( cart.map( menu => {
            return menu.id === item.id ? { ...menu, cantidad: menu.cantidad + cantidad } : menu 
        } )); 
    } else {
        setCart( [...cart, { ...item, cantidad: cantidad } ] )
    }
  };

  //console.log( cart )

    const clearCart = () => setCart( [] );
    
    const isInCart = ( id ) => cart.some( menu => menu.id === id );
    
    const removeItem = ( id ) => setCart( cart.filter( menu => menu.id !== id ) );

    return (
        <CartContext.Provider value= { {
            clearCart,
            isInCart,
            removeItem,
            addItem
        } }>
            { children }
        </CartContext.Provider>


    )
};

export default CartProvider;