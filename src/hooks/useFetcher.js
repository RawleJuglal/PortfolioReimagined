import React,  {useState, useEffect} from 'react'
import axios from 'axios'

const useFetchData = (url)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [apiData, setApiData] = useState(null)
    const [serverError, setServerError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=> {
            try {
                const resp = await axios.get(url)
                const data = await resp?.data

                setApiData(data)
                setIsLoading(false)
            } catch {
                setServerError(error)
                setIsLoading(false)
            }
        }

        fetchData();
    }, [url])

    return { isLoading, apiData, serverError}
}

export default useFetchData