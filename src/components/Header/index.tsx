import * as S from './header.style'


export const Header = () => {
  return(
  <>
    <S.Header>
      <span className="logo">Rockteer</span>
      <S.Menu>
          <li><a href="/">Home</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">View Product </a></li>
          <li><a href="/">Pricing</a></li>
        </S.Menu>
      
      </S.Header>
  </>
  )
}