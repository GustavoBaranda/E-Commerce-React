import ItemDetail from '../ItemDetail/ItemDetail';
import {data } from '../data/Data';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function ItemDetailContainer (){
    const [menu, setMenus] = useState({});
    const [Loading, setLoading] = useState(true);
    const { iditem } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                const myData = data.find((item) => item.id == iditem);

                resolve(myData); 
            }, 500);
        });

        getItems.then((res) => 
        setMenus(res));
        setLoading(false);
    }, [])


    return Loading ? 
    <div>
        <h1>Cargando...</h1>            
    </div> :
    
    (
        <>
          {menu && <ItemDetail {...menu} />}
        </>
    );
};

export default ItemDetailContainer;