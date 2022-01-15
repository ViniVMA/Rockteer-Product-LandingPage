import * as S from './header.style'


export const Header = () => {
  return(
  <>
    <S.Header id="home">
      <span className="logo">Rockteer</span>
      <S.Menu>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#product">View Product </a></li>
          <li><a href="#prices">Pricing</a></li>
        </S.Menu>
      
      </S.Header>
  </>
  )
}