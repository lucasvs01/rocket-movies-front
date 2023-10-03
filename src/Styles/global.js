import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    :root {
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE}
    };

    a, button, li {
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        text-decoration: none;
        list-style: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: filter 0.3s;
        
    }

    a:hover, button:hover, li:hover {
        filter: brightness(0.9);
    }

`;
