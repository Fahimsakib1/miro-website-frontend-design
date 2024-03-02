import './App.css';
import FifthSection from './Components/FifthSection/FifthSection';
import ForthSection from './Components/ForthSection/ForthSection';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      <FifthSection></FifthSection>
    </div>
  );
}

export default App;
