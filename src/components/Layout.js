import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, location }) {
    return (
        <div className="App">
            <Header pathname={location.pathname}/>
                {children}
            <Footer/>
        </div>
    )
}
export default withRouter(Layout)
