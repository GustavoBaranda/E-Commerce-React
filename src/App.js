import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'
import Form from './components/Form/Form'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CartProvider from './context/Cartcontext';


function App() {
  return (
   <>
    <CartProvider>  
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer greetings="Bienvenidos a Rodolfo's Beer&Burger" />} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
              <Route path="/item/:iditem" element={ <ItemDetailContainer />} />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/Form" element={ <Form /> } />
              <Route path="*" element={ <Navigate to="/" />}  />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
