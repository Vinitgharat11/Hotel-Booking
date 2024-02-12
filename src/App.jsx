import AboutUs from "./components/aboutUs";
import Navbar from "./components/navbar";
import PopularSection from "./components/popularSection";
import Services from "./components/services";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <PopularSection />
      <Services />
      <AboutUs/>
    </Wrapper>
  );
}

export default App;
