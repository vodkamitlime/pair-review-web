import Header from "../src/components/common/Header";
import Carousel from "./components/slidersection/Carousel";

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <div className="startbutton">
        <div className="text">Start Now</div>
      </div>
    </div>
  );
}

export default App;
