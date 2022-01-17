import styled from 'styled-components'
import img from '../../../public/img/aboutimage.png'




export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  height: 100vh;
  margin: 100px 0;
 
  
  
  .aboutText {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
          height: auto;
          font-style: normal;
          font-weight: normal;
          line-height: 4.2rem;
          border-radius: 16px;
          padding: 26.0rem 9.0rem ;
          background-image: url(${img});
          background-repeat: no-repeat;

          @media screen and (max-width: 470px) {
                      padding: 4.0rem 4.0rem;
                      
                      
            }

          
          
          
         
        

          h2 {
            font-size: 6.4rem;
            font-weight: bold;

            @media screen and (max-width: 820px) {
                font-size: 3.8rem;
                text-overflow: hidden;
                
      }
          }

          h3 {
            margin: 2.4rem 0;
            @media screen and (max-width: 820px) {
                font-size: 1.6rem;
                text-overflow: hidden;
                
      }
          }

          p {
            font-size: 2.4rem;
            line-height: 2.8rem;
            font-weight: 200;
            text-overflow: hidden;
            overflow: hidden;

            @media screen and (max-width: 820px) {
                font-size: 1.6rem;
                text-overflow: hidden;
                line-height: 1.8rem;
                
      }
              @media screen and (max-width: 470px) {
                      font-size: 0.9rem;
                      text-overflow: hidden;
                      
                      
            }


            
        }
        
      }
`