import './App.css';
import FifthSection from './Components/FifthSection/FifthSection';
import ForthSection from './Components/ForthSection/ForthSection';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import SixthSection from './Components/SixthSection/SixthSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
    </div>
  );
}

export default App;
