import React, { useState, useEffect } from "react";
import Header from "../src/components/common/Header";
import Carousel from "./components/slidersection/Carousel";
import About from "./components/aboutproject/About";
import Team from "./components/teamsection/Team";
import Footer from "./components/common/Footer";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    let section = document.getElementsByTagName("section");

    let pageNum = 0;

    let totalNum = section.length;

    function pageChangeFunc() {
      // console.log(pageNum); section에 pagenum으로 접근해서 css 붙여야 겠는걸?
      section[pageNum].setAttribute("class", "active");
    }

    window.addEventListener("scroll", function (event) {
      let scroll = this.scrollY;

      for (let i = 0; i < totalNum; i++) {
        if (
          scroll > section[i].offsetTop - window.outerHeight / 3 &&
          scroll <
            section[i].offsetTop -
              window.outerHeight / 3 +
              section[i].offsetHeight
        ) {
          pageNum = i;
          // console.log(i);
          break;
        }
        // if(scroll > section[i].offsetTop &&
        //     scroll < section[i].offsetTop + section[i].offsetHeight){
        //   pageNum = i;
        //   break;
        // }
        // console.log(section[i].offsetTop, section[i].offsetHeight)
      }
      pageChangeFunc();
    });
  });

  function clickHandler() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="app">
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Carousel clickHandler={clickHandler} />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
