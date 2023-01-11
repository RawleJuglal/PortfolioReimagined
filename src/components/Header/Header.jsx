import React from 'react'
import useFetchData from '../../hooks/useFetcher'

function Header(){
    const {isLoading, serverError, apiData} = useFetchData(`https://jsonplaceholder.typicode.com/posts/1`)
    console.log(apiData)
    return(
        <header>
            <h2>Header Content</h2>
        </header>
    )
}

export default Header