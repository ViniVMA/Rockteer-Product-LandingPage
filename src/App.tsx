import styled from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AboutSection } from "./pages/About"
import { FirstCTASection } from "./pages/FirstCTASection"
import { HeroSection } from "./pages/HeroSection"
import { PricesSection } from "./pages/PricesSection"
import { SecondCTASection } from "./pages/SecondCTAsection"


function App() {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <GridCenter >
       <AboutSection />
       <FirstCTASection />
       <SecondCTASection />
       <PricesSection />
      </GridCenter>
      <Footer />
    </Wrapper>
    
  )
}


const Wrapper = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 5fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    background: linear-gradient(271deg, #2d0014, #560127);
    background-size: 400% 400%;  
    align-items: center; 
    background: linear-gradient(300deg,#590209, #590209,#000000,#000000,#5a0007, #5a0007);
    background-size: 340% 340%;
    animation: gradient-animation 8s ease infinite;


      @keyframes gradient-animation {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      
`
export const GridCenter = styled.div`

    grid-column: 2;
    
`


export default App
