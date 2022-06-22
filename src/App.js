import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
   <>
      <Navbar />
      <ItemListContainer greetings="Bienvenidos a WildBurger" />
   </>
  );
}

export default App;
