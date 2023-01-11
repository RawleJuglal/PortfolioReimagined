import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function App(){
    return(
        <div>
            <Header />
            <main>
                <p>Main Content</p>
            </main>
            <Footer />
        </div>
    )
}

export default App;