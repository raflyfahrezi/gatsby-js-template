import React from 'react'

import { GlobalStyles } from 'Styles'

const wrapRootElement = ({ element }) => (
    <>
        <GlobalStyles />
        {element}
    </>
)

export { wrapRootElement }
