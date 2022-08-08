import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner'
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
function ItemDetailContainer (){
    const [menu, setMenu] = useState({});
    const [Loading, setLoading] = useState(true);
    const { iditem } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const querydb = getFirestore();
        const queryDoc = doc(querydb,'data', iditem);
        getDoc(queryDoc)
        .then(res => setMenu({ id: res.id, ...res.data() }));
        setLoading(false);
    }, [])


    return(  
        <>
            {
                Loading ? (
                <Spinner />
                ) : (
                <ItemDetail {...menu} />
                )
            }           
        </>
    );
};

export default ItemDetailContainer;