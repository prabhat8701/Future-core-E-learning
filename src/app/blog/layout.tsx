import React from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

function Layout({children}:{children: React.ReactNode}) {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF'/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout