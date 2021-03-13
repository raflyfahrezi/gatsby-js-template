import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
    * {
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }

    body {
        background-color: ${props => props.theme.body};
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.body};
        transition : 0.5s;
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.yellow}; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`

export default globalStyles
