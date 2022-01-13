import styled from 'styled-components'



export const Prices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 35.2rem;
    height: 56.0rem;
    text-align: center;
    background-color: #00000095;
    border-radius: 24px;
    box-shadow: -8px 8px 32px rgba(242, 58, 41, 0.25);
    padding: 2.4rem 5.0rem;
    margin: 2.5rem;

    .category {
      font-size: 2.4rem;
      font-weight: bold;
    }

    .description {
        line-height: 5.0rem;
        font-weight: 500;
        font-size: 14px;
    }

    .price {
      font-weight: 500;
      font-size: 36px;
    }
`