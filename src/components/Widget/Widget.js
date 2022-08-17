import { BsBag } from "react-icons/bs";
import { useCartContext } from '../../context/Cartcontext'
import './Widget.css'

function Widget() {

  const { totalMenus } = useCartContext();

  return (
   <div className="widget">
      <BsBag />
      <span className="totalItem"> { totalMenus() || ''}</span>
    </div>
  );
}

export default Widget;

