import React, { Fragment } from 'react'

import { GlobalStyles } from 'Styles'

const wrapRootElement = ({ element }) => (
    <Fragment>
        <GlobalStyles />
        {element}
    </Fragment>
)

export { wrapRootElement }
