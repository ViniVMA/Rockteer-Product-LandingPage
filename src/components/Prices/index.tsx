import * as S from './prices.style'


interface PricesProps {
  category: string;
  description: string;
  prices: string;
}


export const Prices = (props: PricesProps) => {
  return(
    <S.Prices>
      <p className="category">{props.category}</p>
      <p className="description">{props.description}</p>
      <p className="price">{props.prices}</p>
    </S.Prices>
  )
}