
import { useState,useEffect } from "react";


// custom Hook video # 20....

const useFetch=(url)=>{



    const [data,setData]=useState(null);
    const [isPending,setPending]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=> {
        // useEffect cleanup #24
        const abortCont = new AbortController();


        setTimeout(()=> {
            fetch(url, {signal: abortCont.signal} )
        .then(res=> {
            console.log(res);
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
    
            
        }).then(data=> {
            console.log(data);
            setData(data);
            setPending(false);
            setError(null);
        
       
        
        }).catch(err=>{
            if (err.name==='AbortError'){
                 console.log('fetch aborted');
            }else{
            setError(err.message);
            setPending(false);
        }
        });
        },1000);
          return ()=>abortCont.abort();
    },[url]);

    return{data, isPending, error}
}


export default useFetch;