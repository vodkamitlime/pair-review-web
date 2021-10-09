import { Switch, Route } from "react-router-dom";
import Header from "../src/components/common/Header";
import Carousel from "./components/slidersection/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Switch> </Switch>
    </div>
  );
}

export default App;
