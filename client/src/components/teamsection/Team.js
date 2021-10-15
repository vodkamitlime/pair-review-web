import vodka from "../../assets/vodkaimg.png";
import daniel from "../../assets/danielimg.png";

function About() {
  return (
    <div className="fixposition">
      <section className="teamcontainer">
        <h2>Team</h2>
        <div className="wrappers">
          <div className="teamwrapper">
            <img src={vodka} />
            <div className="desc">
              <h3>Backend</h3>
              <div className="channel"></div>
              <p>
                Hi, I’m Haeun Kang. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                accumsan ligula. Aenean eleifend in lectus vitae sollicitudin.
                In at diam lacinia, hendrerit turpis quis, faucibus nibh.
                <br />
                Thanks.
              </p>
            </div>
          </div>
          <div className="teamwrapper">
            <img src={daniel} />
            <div className="desc">
              <h3>Frontend</h3>
              <div className="channel"></div>
              <p>
                Hi, I’m Seonghyeon Park. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                accumsan ligula. Aenean eleifend in lectus vitae sollicitudin.
                In at diam lacinia, hendrerit turpis quis, faucibus nibh.
                <br />
                Thanks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
