import { Button } from '../../components/Button'
import { HelmetImageOne } from '../../components/HelmetImages'
import * as S from './firstCTAsection.style'



export const FirstCTASection = () =>{
  return(

      <>
        <S.Wrapper id="product">
         <S.ImageWrapper>
           <HelmetImageOne />
          </S.ImageWrapper> 
          <S.TextWrapper>
            <h3>Advanced communictacions system</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam phasellus. </p>
            <Button  title="Buy Now →" />
          </S.TextWrapper>
       </S.Wrapper>     
      </>
  )
}