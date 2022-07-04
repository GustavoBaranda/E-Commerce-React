import ItemDetail from './ItemDetail';
import {data } from './data/Data';
import React, { useEffect, useState } from 'react';

function ItemDetailContainer (){
    const [menu, setMenus] = useState({});

    useEffect(() => {
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                const myData = data.find((item) => item.id == '1');

                resolve(myData); 
            }, 1000);
        });

        getItems.then(res => setMenus(res));
     }, [])


    return(
        <>
          {menu && <ItemDetail {...menu} />}
        </>
    );
};

export default ItemDetailContainer;