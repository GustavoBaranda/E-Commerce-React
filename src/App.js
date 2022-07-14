import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CartProvider from './context/Cartcontext';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra'

function App() {
  return (
   <>
    <CartProvider>  
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Bienvenidos a Rodolfo's Beer&Burger" />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greetings="Categorias" />} />
            <Route path="/item/:iditem" element={ <ItemDetailContainer />} />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="*" element={ <Navigate to="/" />}  />
            <Route path="/finalizarCompra" element={ <FinalizarCompra /> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
