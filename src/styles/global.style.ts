import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        html {
            font-size: 62.5%;
            min-height:100%;
        }

        html, body {
            width: 100%;
            height: 100%;
            margin: 0px;
            padding: 0px;
            overflow-x: hidden; 
        }
        
        body {
            font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            color: #fff;
            
        }
      
        
  `