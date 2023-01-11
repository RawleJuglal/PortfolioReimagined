import {useState, useEffect, useRef} from 'react'

function useFetcher(url){
    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(false)
    const ref = useRef(null)

    useEffect(()=>{
        setFetching(true)
        if(fetching){
            fetch(url)
                .then(res=> res.json())
                .then(data=> setData(()=>([...data])))
                .then(()=> setFetching(false))
        }
    },[])
    
    return [data, ref]
}

export default useFetcher