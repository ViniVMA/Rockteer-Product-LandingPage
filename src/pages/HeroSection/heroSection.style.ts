import styled from 'styled-components'


export const Section = styled.section`
    grid-column-start: span 3;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1.5fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px;
    

    
        

    img {
        
    }

    @media screen and (max-width: 960px) {

      height: 100vh;
      img {
        display:none;
      }
      
      @media screen and (max-width: 847px) {
        height: 100%;
        }

        @media screen and (max-width: 600px) {
        height: 100vh;
        }

        @media screen and (max-width: 500px) {
        height: 100%;
        }
        
}

`

export const HeroText = styled.div`
      margin-top: 9.0rem;
      max-width: 60%;
      margin-left: 10.0rem;
      
      

      h1, h2, label {
        font-weight: 300;
      }

    h1 {
        font-size: 10.4rem;
        line-height: 16.9rem;
    }

    h2 {
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-bottom: 7.0rem
    }

    form {
      
    }

    label {
      display: block;
        
    }

    input {
      border: none;
      outline: none;
      border-radius: 16px;
      height: 4.6rem;
      width: 31.9rem;
      background-color: #590209;
      margin: 2.4rem 5.0rem 2.4rem 0;
    }

    @media screen and (max-width: 960px) {
      grid-column-start: span 2;
}

    @media screen and (max-width: 600px) {
      h1 {
        font-size: 10.4rem;
        line-height: 10.5rem;
        margin-bottom: 2.0rem;
      }

      input {
        width: 30.0rem;
      }

      @media screen and (max-width: 500px) {
        margin-left: 10px;
        }
}


`