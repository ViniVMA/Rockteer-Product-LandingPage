import * as S from './button.style'

interface ButtonProps {
  title: string;
}


export const Button = (props: ButtonProps) => {
  return(
    <S.Button >{props.title}</S.Button>
  )
}