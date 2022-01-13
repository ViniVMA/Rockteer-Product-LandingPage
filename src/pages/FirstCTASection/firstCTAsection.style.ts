import styled from 'styled-components'
import { HelmetImageOne } from '../../components/HelmetImages'


export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;

    @media screen and (max-width: 640px) {
            height: 50vh;
            margin-top: 1.0rem;
        }
`



export const TextWrapper = styled.div`
    margin: 2.0rem 0 0 40.0rem;    

    @media screen and (max-width: 820px) {
        margin-left: 1.0rem;
        }

    

    h3 {
      font-weight: 500;
      font-size: 36px;
      margin-bottom: 2.5rem;
    }

    p {
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-bottom: 4.8rem;
    }    
`

export const ImageWrapper = styled.div`
        img {
          height: 42.8rem;

          @media screen and (max-width: 640px) {
            display: none;
        }

        }

`

