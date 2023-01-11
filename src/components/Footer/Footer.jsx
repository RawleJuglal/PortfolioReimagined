import React from 'react'
import useFetchData from '../../hooks/useFetcher'

function Footer(){
    const {isLoading, serverError, apiData} = useFetchData(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
    console.log(apiData)
    return(
        <footer>
            <h2>Footer Content</h2>
        </footer>
    )
}

export default Footer