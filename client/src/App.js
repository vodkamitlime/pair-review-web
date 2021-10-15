import Header from "../src/components/common/Header";
import Carousel from "./components/slidersection/Carousel";
import About from "./components/aboutproject/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <div className="startbutton">
        <div className="text">Start Now</div>
      </div>
      <About />
    </div>
  );
}

export default App;
