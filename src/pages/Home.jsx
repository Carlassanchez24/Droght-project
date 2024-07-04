import KeyFeatures from "../components/home-components/KeyFeatures/keyFeatures"
import HowTo from "../components/home-components/HowTo/HowTo"
import GetStarted from "../components/home-components/GetStarted/GetStarted"
import HomeHero from "../components/home-components/HomeHero/HomeHero"


 const Home = () => {
    return (
      <>
        <HomeHero />
        <KeyFeatures></KeyFeatures>
        <HowTo></HowTo>
        <GetStarted></GetStarted>
      </>
      )
  }
  
  export default Home