import { Button } from '../../components/Button/'
import { HeroImg } from '../../components/HeroImg'
import * as S from './heroSection.style'

export const HeroSection = () => {
  return(
    <S.Section>
      <S.HeroText>
        <h1>The Future is now</h1>
        <h2>Rocketeer helmets is a visionary enterprise that is trying to improve your health by building modern and comfortable helmets for you. </h2>
        <form>
          <label>Enter your email to get the latest news</label>
          <input type="email" />
          <Button title='Submit'/>
        </form>
      </S.HeroText>   
      <HeroImg />
    </S.Section>
  )
}