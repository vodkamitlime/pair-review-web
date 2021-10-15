import aboutimg1 from "../../assets/aboutimg1.png";
import aboutimg2 from "../../assets/aboutimg2.png";

function About() {
  return (
    <div className="fixposition">
      <section className="aboutcontainer">
        <h2>About</h2>
        <div className="aboutwrapper">
          <div className="text">
            <h3>Problem</h3>
            <p>
              코드스테이츠 수강생들은 취업을 위한 이력서 작성시 페어리뷰를
              통하여 본인의 협업능력 및 커뮤니케이션 능력을 어필할 수 있는데요.
              하지만 이를 위해서는 메일에 들어가 내용을 일일이 확인해야하는
              번거로움이 있습니다.
            </p>
          </div>
          <img src={aboutimg1} />
        </div>
        <div className="aboutwrapper">
          <div className="text">
            <h3>Suggest</h3>
            <p>
              수강생 여러분의 시간은 소중합니다. 페어리뷰 웹에서는 이메일 주소,
              비밀번호만 입력하면 모든 pair review 메일을 하나의 파일로 다운받아
              볼 수 있습니다. 채용담당자에게 여러분을 어필해보세요!
            </p>
          </div>
          <img src={aboutimg2} />
        </div>
      </section>
    </div>
  );
}

export default About;
