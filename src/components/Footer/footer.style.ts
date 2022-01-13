import styled from 'styled-components'



export const Footer = styled.nav`
  grid-column-start: span 3;
  display: flex;
  justify-content: space-between;
  gap: 0px 0px;
  align-items: center;
  height: 6.7rem;
  color: #fff;
  background: #00000099;
  width: 100%; 

  * {
    margin: 0 13.0rem;
    display: flex;
  }


   @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
}

  

  .logo {
      
      font-family: Vollkorn;
      font-size: 2.4rem;
      padding-left: 1rem;
  }
`


export const SocialLinks = styled.div`
      
      justify-self: center;
      

      * {
        margin:0 3.0rem;
      }
`