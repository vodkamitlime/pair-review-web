import React, { useState } from "react";
import Header from "../src/components/common/Header";
import Carousel from "./components/slidersection/Carousel";
import About from "./components/aboutproject/About";
import Team from "./components/teamsection/Team";
import Footer from "./components/common/Footer";
import Modal from "./components/common/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function clickHandler() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="app">
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Carousel />
      <div className="startbutton">
        <div className="text" onClick={() => clickHandler()}>
          Start Now
        </div>
      </div>
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
