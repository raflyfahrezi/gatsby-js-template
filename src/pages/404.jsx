import React from 'react'
import { Helmet } from 'react-helmet-async'

const error = () => {
    return (
        <div>
            <Helmet>
                <title>Opps, error</title>
            </Helmet>
            <p>Error</p>
        </div>
    )
}

export default error
