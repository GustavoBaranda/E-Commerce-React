import { FaCartArrowDown } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from '../../context/Cartcontext'
import './Widget.css'

function Widget() {

  const { totalMenus } = useCartContext();

  return (
   <div className="widget">
    
      { 
        totalMenus() === 0 ? 
        ( 
          <FaCartArrowDown /> 
        ):(  
          <FaCartPlus /> 
        )
      }
      <span className="totalItem"> { totalMenus() || ''}</span>
      
    </div>
  );
}

export default Widget;

