import styled from 'styled-components'



export const Header = styled.nav`
  grid-column-start: span 3;
  display: grid;
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 4fr 3fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  align-items: center;
  height: 6.4rem;
  color: #fff;
  background: #00000099;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 1;


   @media screen and (max-width: 500px) {

      
      display: flex;
      flex-direction: column;
      justify-content: center;
}

  

  .logo {
      justify-self: end;
      font-family: Vollkorn;
      font-size: 2.4rem;
      padding-left: 1rem;
  }
`


export const Menu = styled.ul`
  grid-column: 3;
  display: flex;
  justify-content: space-evenly;
  justify-self: start;
  padding: 0 60px;
  
  li {
    list-style-type: none;
    margin: 0;
    
    :hover {
    }
    
    
    a {
      color: #fff;
      text-decoration: none;
      padding: 1.0rem 2.0rem;
      transition: ease-in-out 0.5s;
      position: relative;
      
      :hover{
        background-color: #59020990;
        
      }
      
    }
  }  

  @media screen and (max-width: 550px) {
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 0;
        margin: 0 1.0rem;
      }
        
        a {
          font-size: 1.4rem;
        }
}
`