import { useEffect, useState } from "react"

const localCache = {
} as any;



export const useFetch = ( url: string) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null as any
    });


    useEffect(() => {      
        getFetch();
    }, [url])

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }


    const getFetch = async ( ) => {
        try {
            if (localCache[url]) {
                setState({
                    data: localCache[url],
                    isLoading: false,
                    hasError: false,
                    error: null
                });
                return;
            }
            setLoading();
            const resp = await fetch(url); 
            const data = await resp.json(); 

            if (!resp.ok) {
             
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        code: resp.status,
                        message: !data.message ? 'Error en la petición' : data.message
                    }
                });
            }

            setState({
                data,
                isLoading: false,
                hasError: false,
                error: null
            });

            localCache[url] = data;
        } catch (error:any) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error
            });
        }
    }
    
    




    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}