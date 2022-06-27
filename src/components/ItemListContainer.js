import './ItemListContainer.css';
import ItemCount from './ItemCount'

function ItemListContainer({greetings}) {
  return (
    <div className="ItemListContainer">
      <h1 className="titulo">{greetings}</h1>
      <br />
      <ItemCount stock="10" initial="1" />
    </div>
  );
}

export default ItemListContainer;
