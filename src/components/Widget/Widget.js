import { FaCartPlus } from 'react-icons/fa';
import {useCartContext} from '../../context/Cartcontext'
import './Widget.css'

function Widget() {
  const { totalMenus } = useCartContext();
  return (
   <>
    <FaCartPlus />
    <span className="totalItem"> { totalMenus() || ''}</span>
   </>
  );
}

export default Widget;
