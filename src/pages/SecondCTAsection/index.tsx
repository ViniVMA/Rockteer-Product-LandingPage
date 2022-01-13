import { Button } from '../../components/Button'
import { HelmetImageOne } from '../../components/HelmetImages'
import * as S from './secondCTAsection.style'



export const SecondCTASection = () =>{
  return(

      <>
        <S.Wrapper>
          <S.TextWrapper>
            <h3>Improved ventilation system</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam phasellus. </p>
            <Button title="Buy Now →" />
          </S.TextWrapper>
         <S.ImageWrapper>
           <HelmetImageOne />
          </S.ImageWrapper> 
       </S.Wrapper>     
      </>
  )
}