import React from 'react'
import { Helmet } from 'react-helmet-async'

const index = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <p>Hello World</p>
        </div>
    )
}

export default index
