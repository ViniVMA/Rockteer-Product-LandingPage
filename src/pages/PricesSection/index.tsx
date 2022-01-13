import { Prices } from "../../components/Prices"
import * as S from './pricesSection.style'


export const PricesSection = () => {
  return(
    <S.PricesSection>
      <Prices category="Basic" prices="$230" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
      <Prices category="Basic" prices="$230" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
      <Prices category="Basic" prices="$230" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
    </S.PricesSection>
  )
}