import React from 'react'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
   <>
      <Navbar />
      <ItemListContainer greetings="Bienvenidos a WildBurger" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
