import React from 'react'

function Wrapper({children, backgroundColor}:{children: React.ReactNode, backgroundColor: string}) {
    return (
        <section style={{backgroundColor}}>
            <div className="container mx-auto py-10 px-4">
                {children}
            </div>
        </section>
    )
}

export default Wrapper