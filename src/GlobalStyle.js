import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #16194F;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }
    body{
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem;
    }
`;

export default GlobalStyle;
