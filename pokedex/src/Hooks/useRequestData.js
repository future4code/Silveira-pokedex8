import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useRequestData = (estadoInicial, url) => {
    const [data, setData] = useState(estadoInicial);
    const [error, setError] = useState(undefined);

    const pegaDados = async () => {
        
       try {
        const res = await axios.get(url)
            setData(res.data.results);

        } catch (error) {
           console.log(error);
           setError(error);
       }
    };

    useEffect(() => {
        pegaDados();
    }, []);

    return [data, error];
};

export default useRequestData;