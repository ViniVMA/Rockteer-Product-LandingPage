import { Facebook, Instagram, Twitter } from '../SocialLogos'
import * as S from './footer.style'


export const Footer = () => {
  return(
  <>
    <S.Footer>
      <span className="logo">© Rockteer</span>
      <S.SocialLinks>
          <Facebook />
          <Twitter />
          <Instagram />
        </S.SocialLinks>
      </S.Footer>
  </>
  )
}