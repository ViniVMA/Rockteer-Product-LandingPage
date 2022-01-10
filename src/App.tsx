import styled from "styled-components"
import { Header } from "./components/Header"
import { HeroSection } from "./pages/HeroSection"


function App() {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <GridCenter >
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
      </GridCenter>
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
    
    padding-top: 64px;

    background: linear-gradient(300deg,#590209,#000000,#000000,#5a0007);
    background-size: 240% 240%;
    animation: gradient-animation 12s ease infinite;


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
margin-top: 4.0rem;
`


export default App
