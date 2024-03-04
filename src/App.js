import './App.css';
import EighthSection from './Components/EighthSection/EighthSection';
import FifthSection from './Components/FifthSection/FifthSection';
import Footer from './Components/Footer/Footer';
import ForthSection from './Components/ForthSection/ForthSection';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import NinthSection from './Components/NinthSection/NinthSection';
import SixthSection from './Components/SixthSection/SixthSection';
import TenthSection from './Components/TenthSection/TenthSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <HeroSection></HeroSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <EighthSection></EighthSection>
      <NinthSection></NinthSection>
      <TenthSection></TenthSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
